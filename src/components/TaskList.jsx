import React from "react";
   import { useSelector, useDispatch } from "react-redux";
   import { toggleTask } from "../redux/actions";

   const TaskList = () => {
     const tasks = useSelector((state) => state.tasks);
     const dispatch = useDispatch();

     const handleToggleTask = (taskId) => {
       dispatch(toggleTask(taskId));
     };

     return (
       <ul className="task-list">
         {tasks.map((task) => (
           <li key={task.id} className="task-item">
             <input
               type="checkbox"
               checked={task.completed}
               onChange={() => handleToggleTask(task.id)}
             />
             <span className={task.completed ? "task-completed" : ""}>
               {task.title}
             </span>
           </li>
         ))}
       </ul>
     );
   };

   export default TaskList;