import { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete React Project",
      priority: "High Priority",
      icon: "📘",
      done: false,
    },
    {
      id: 2,
      text: "Learn Next.js",
      priority: "Medium Priority",
      icon: "🚀",
      done: false,
    },
    {
      id: 3,
      text: "Study DSA",
      priority: "Low Priority",
      icon: "🧪",
      done: true,
    },
  ]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      priority: "Medium Priority",
      icon: "🎯",
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const completed = tasks.filter((t) => t.done).length;
  const pending = tasks.length - completed;

  return (
    <div className="app">

      <div className="overlay">

        <h1 className="title">
          📋 To-Do List
        </h1>

        <p className="subtitle">
          Organize your tasks and boost productivity 🚀
        </p>

        <div className="input-box">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="filter-box">
          <button className="active">All</button>
          <button>Pending</button>
          <button>Completed</button>
        </div>

        <div className="task-list">

          {tasks.map((t) => (
            <div className="task-card" key={t.id}>

              <div
                className={
                  t.done
                    ? "circle done"
                    : "circle"
                }
                onClick={() => toggleTask(t.id)}
              >
                {t.done ? "✔" : ""}
              </div>

              <div className="task-icon">
                {t.icon}
              </div>

              <div className="task-info">
                <h3
                  className={
                    t.done ? "completed" : ""
                  }
                >
                  {t.text}
                </h3>

                <p>{t.priority}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteTask(t.id)}
              >
                🗑
              </button>
            </div>
          ))}

        </div>

        <div className="footer">
          <p>📋 Total Tasks: {tasks.length}</p>
          <p>⏳ Pending: {pending}</p>
          <p>✅ Completed: {completed}</p>
        </div>

      </div>

    </div>
  );
}
