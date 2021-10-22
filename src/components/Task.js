const Task = ({ task }) => {
  return (
    <div className="bg-gray-200 p-3 mb-2">
      <h3 className="font-semibold">{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
