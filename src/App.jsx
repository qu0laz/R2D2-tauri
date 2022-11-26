import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
    const [greetMsg2, setGreetMsg2] = useState("");
  const [name, setName] = useState("");
    const [name2, setName2] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }
    async function greet2() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg2(await invoke("greet2", { name2 }));
    }
  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <div className="row">
        <div>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="button" onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>

        <div className="row">
            <div>
                <input
                    id="greet-input2"
                    onChange={(e) => setName2(e.currentTarget.value)}
                    placeholder="Enter a name2..."
                />
                <button type="button" onClick={() => greet2()}>
                    Greet
                </button>
            </div>
        </div>
        <p>{greetMsg}</p>
      <p>{greetMsg2}</p>
    </div>
  );
}

export default App;
