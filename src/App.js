import React, { useState } from 'react';

import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';
import './App.css';

function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Rahul',
      age: 27
    },{
      id: 2,
      name: 'Aditya',
      age: 26
    },
  ]);

  const addNewUser = newUser => {
    setUsers(prevState => {
      return [newUser, ...prevState];
    })
  }

  return (
    <div className="App">
      <h1>Form overlay</h1>
      <NewUser onNewUserAddition={addNewUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
