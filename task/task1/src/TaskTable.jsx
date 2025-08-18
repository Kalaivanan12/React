import React, { useReducer, useState, useEffect } from "react";
import "./TaskTable.css";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

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
    case "EDIT":
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, text: action.payload.text }
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
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (text.trim() === "") return;
    if (editId) {
      dispatch({ type: "EDIT", payload: { id: editId, text } });
      setEditId(null);
    } else {
      dispatch({ type: "ADD", payload: text });
    }
    setText("");
  };

  // Counters
  const inProgress = tasks.filter(t => t.status === "In Progress").length;
  const todo = tasks.filter(t => t.status === "To-Do").length;
  const done = tasks.filter(t => t.status === "Done").length;

  return (
    <div className="container">
      <h1>📝 My To-Do List</h1>

      {/* Counters */}
      <div className="stats">
        <span>🟡 In Progress: {inProgress}</span>
        <span>🔵  To-Do: {todo}</span>
        <span>🟢 Done: {done}</span>
      </div>

      {/* Input */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>{editId ? "Update" : "Add"}</button>
        <button className="reset" onClick={() => dispatch({ type: "RESET" })}>
          Clear All
        </button>
      </div>
      {/* Task List */}
      <ul>
        {tasks
          .filter(task => task.text.toLowerCase().includes(search.toLowerCase()))
          .map(task => (
            <li
              key={task.id}
              className={task.status.toLowerCase().replace(" ", "-")}
            >
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
                <option>To-Do</option>
                <option>Done</option>
              </select>
              <button
                className="edit"
                onClick={() => {
                  setText(task.text);
                  setEditId(task.id);
                }}
              >
                ✏️
              </button>
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
