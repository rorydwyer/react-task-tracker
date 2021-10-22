const Button = ({ color, text }) => {
  return <button className={`bg-${color} rounded-md py-2 px-4 text-white`}>{text}</button>;
};

Button.defaultProps = {
  color: "gray-300",
  text: "Button",
};

export default Button;
