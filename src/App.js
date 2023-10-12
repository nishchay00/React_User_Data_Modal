import React from 'react';
import UserInput from './components/UserInput/UserInput';
import { useState, Fragment } from 'react';
import User from './components/User/User';



function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return[...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];  
    });
  };

  return (
    <Fragment>
      <UserInput onAddUser={addUserHandler}/>
      <User users={usersList}/>
    </Fragment>
  );
}

export default App;
