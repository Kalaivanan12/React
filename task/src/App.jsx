import React from "react";
import Form from "./components/Form";
import Demo from "./Useeffect";
import UserContext from "./components/UserContext";
import Profile from "./components/Profile";

// function App() {
//   let isMounted = "false";
//   return (
//     <div>
//       <Form />
//       {/* <Demo res={isMounted}/> */}
//     </div>
//   );
// }
function App() {
  const user = {
    name: "Kalaivanan", 
    age: 23,
    role: "Developer",
    email:"kalaivanankarthi31@gmail.com",
    phone: "8870051316",
    address: "Kurijinpadi, Cuddalore, Tamil Nadu, India."
  };
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Form />
        <h1>React UseContext</h1>
        <Profile />
        </div>
        </UserContext.Provider>
  );
}
export default App;