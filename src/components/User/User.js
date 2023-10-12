import classes from "./User.module.css";
import Card from '../UI/Card';


const User = (props) => {
  return(
  <Card className={classes.users}>
  <ul>
    {props.users.map((user) => (
      <li key={user.id}>
        {user.name} ({user.age} years old)
      </li>
    ))}
  </ul>
  </Card>
  )
};

export default User;
