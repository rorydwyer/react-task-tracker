import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onShowAddTask, addTask }) => {
  const location = useLocation();

  return (
    <header className="flex justify-between pb-8">
      <h1 className="text-4xl">{title}</h1>
      {location.pathname === "/" && <Button color={addTask ? "red-500" : "green-500"} text={addTask ? "Close" : "Add Task"} onClick={onShowAddTask} />}
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
