import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false);
  const [tasks, setTasks] = useState([]);

  // SEVER-LIKE FUNCTIONALITY
  // LifeCycle Hook
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3001/tasks");
    const data = await res.json();
    return data;
  };

  // Fetch single task from server
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // TASK METHODS
  // Toggle Add Task Form
  const toggleAddTask = () => {
    setShowAddTasks(!showAddTasks);
  };

  // Add task
  const addTask = async (task) => {
    // setTasks([...tasks, { id: tasks.length + 1, text, day, reminder }]);
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
  };

  // TASK LIST
  return (
    <div className="container">
      <Header title="Task List" onShowAddTask={toggleAddTask} addTask={showAddTasks} />
      {showAddTasks ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length === 0 ? <p>You have no tasks</p> : <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />}
    </div>
  );
}

export default App;
