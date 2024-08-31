import React, { useState } from "react";
import { useSelector } from "react-redux";

const TaskFilters = () => {
  const [filter, setFilter] = useState("All");
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="task-filters">
      <button onClick={() => setFilter("All")} className="btn-class">
        All
      </button>
      <button onClick={() => setFilter("Completed")} className="btn-class">
        Completed
      </button>
      <button onClick={() => setFilter("Incomplete")} className="btn-class">
        Incomplete
      </button>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span className={task.completed ? "task-completed" : ""}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskFilters;
