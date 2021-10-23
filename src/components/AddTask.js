import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // Breaks if no text is entered
    if (!text.trim()) {
      alert("Please enter a text");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit} className="mb-8">
      <div className="form-control">
        <label>Task Name</label>
        <input
          className="border rounded border-gray-300 m-0"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="add text"
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          className="border rounded border-gray-300 m-0"
          type="text"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
          placeholder="add text"
        />
      </div>
      <div className="form-control-check mb-4">
        <label className="mb-2">Reminder</label>
        <input
          className="w-8"
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>

      <input type="submit" value="Add Task" className="btn w-full" />
    </form>
  );
};

export default AddTask;
