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
    </>
  );
}

export default App;
