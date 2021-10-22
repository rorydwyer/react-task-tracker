import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", day: "Monday", reminder: false },
    { id: 2, text: "Task 2", day: "Tuesday", reminder: false },
    { id: 3, text: "Task 3", day: "Wednesday", reminder: false },
    { id: 4, text: "Task 4", day: "Thursday", reminder: false },
    { id: 5, text: "Task 5", day: "Friday", reminder: false },
    { id: 6, text: "Task 6", day: "Saturday", reminder: false },
  ]);

  return (
    <div className="container">
      <Header title="Task List" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
