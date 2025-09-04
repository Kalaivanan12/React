import React, { useState } from "react";

const ButtonClick = () => {
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            });
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>Demo User</h2>
            <button onClick={fetchData}>Users</button>
            {users.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ButtonClick;
