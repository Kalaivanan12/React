import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Valentine from "./Valentine";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valentine" element={<Valentine />} />
      </Routes>
    </>
  );
}
