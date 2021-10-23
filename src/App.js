import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", day: "Monday", reminder: false },
    { id: 2, text: "Task 2", day: "Tuesday", reminder: false },
    { id: 3, text: "Task 3", day: "Wednesday", reminder: false },
    { id: 4, text: "Task 4", day: "Thursday", reminder: false },
    { id: 5, text: "Task 5", day: "Friday", reminder: false },
    { id: 6, text: "Task 6", day: "Saturday", reminder: false },
  ]);

  // Toggle Add Task Form
  const toggleAddTask = () => {
    setShowAddTasks(!showAddTasks);
  };

  // Add task
  const addTask = ({ text, day, reminder }) => {
    setTasks([...tasks, { id: tasks.length + 1, text, day, reminder }]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="container">
      <Header title="Task List" onShowAddTask={toggleAddTask} />
      {showAddTasks ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length === 0 ? <p>You have no tasks</p> : <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />}
    </div>
  );
}

export default App;
