import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onShowAddTask }) => {
  return (
    <header className="flex justify-between">
      <h1 className="text-4xl">{title}</h1>
      <Button color="black" text="Add Task" onClick={onShowAddTask} />
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
