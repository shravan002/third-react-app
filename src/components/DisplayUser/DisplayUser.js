import React from "react";
import Card from "../UI/Card";
import classes from './DisplayUser.module.css';

const DisplayUser = (props) => {
  if (props.userList.length === 0) {
    return <h2>No Expense found</h2>;
  }
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map((userData) => (
          <li key={userData.key}>
            {userData.userName} ( {userData.userAge}
            {userData.userAge > 1 ? " years old )" : " year old )"}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayUser;
