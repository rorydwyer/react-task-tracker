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
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
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
          type="text"
          value={day}
          onChange={(e) => {
            setDay(e.target.value);
          }}
          placeholder="add text"
        />
      </div>
      <div className="form-control">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>

      <input type="submit" value="Add Task" />
    </form>
  );
};

export default AddTask;
