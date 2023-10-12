import classes from "./Card.module.css";

const UI = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default UI;
