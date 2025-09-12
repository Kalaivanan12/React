import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import Banner from "./components/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <FilterBar />
      <Banner />
      {/* <h1 style={{ textAlign: "center" }}>Welcome to My App</h1> */}
    </>
  );
}

export default App;
