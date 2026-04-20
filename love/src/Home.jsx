import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Welcome My Dear Love ❤️</h1>
      <p>Something special is waiting for you...</p>
      <button onClick={() => navigate("/valentine")}>
        Enter Surprise 💌
      </button>
    </div>
  );
}
