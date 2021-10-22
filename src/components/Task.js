import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`bg-gray-200 p-3 mb-4 rounded-sm shadow-md ${task.reminder ? "border-l-4 pl-2 border-green-500" : ""}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <h3 className="font-semibold flex justify-between">
        {task.text}{" "}
        <FaTimes
          onClick={() => {
            onDelete(task.id);
          }}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
