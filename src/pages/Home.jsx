import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import TaskFilters from "../components/TaskFilters";

const Home = () => {
  return (
    <div>
      <TaskInput />
      <TaskFilters />
      <TaskList />
    </div>
  );
};

export default Home;
