import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar"; // ✅ import Navbar

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Welcome to My App</h1>
    </>
  );
}

export default App;
