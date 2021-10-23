import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShowAddTask, addTask }) => {
  return (
    <header className="flex justify-between pb-8">
      <h1 className="text-4xl">{title}</h1>
      <Button color={addTask ? "red-500" : "green-500"} text={addTask ? "Close" : "Add Task"} onClick={onShowAddTask} />
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
