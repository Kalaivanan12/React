import React from "react";
import Form from "./components/Form";
import Demo from "./Useeffect";

function App() {
  let isMounted = "false";
  return (
    <div>
      <Form />
      {/* <Demo res={isMounted}/> */}
    </div>
  );
}
export default App;