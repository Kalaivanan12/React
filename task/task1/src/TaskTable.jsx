import React, { useReducer, useState } from "react";
import "./TaskTable.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, status: "In Progress" }
      ];
    case "UPDATE_STATUS":
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, status: action.payload.status }
          : task
      );
    case "DELETE":
      return state.filter(task => task.id !== action.payload);
    case "RESET":
      return [];
    default:
      return state;
  }
}

export default function TaskTable() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD", payload: text });
      setText("");
    }
  };

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button className="reset" onClick={() => dispatch({ type: "RESET" })}>
          Clear All
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.status.toLowerCase().replace(" ", "-")}>
            <span>{task.text}</span>
            <select
              value={task.status}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_STATUS",
                  payload: { id: task.id, status: e.target.value }
                })
              }
            >
              <option>In Progress</option>
              <option>Completed</option>
              <option>Done</option>
            </select>
            <button
              className="delete"
              onClick={() => dispatch({ type: "DELETE", payload: task.id })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
