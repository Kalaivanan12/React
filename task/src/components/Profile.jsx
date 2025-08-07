
import React, { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
        <p>Age: {user.age}</p>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address}</p>
        <p>Pincode: {user.pincode}</p>
    </div>
  );
}

export default Profile;
