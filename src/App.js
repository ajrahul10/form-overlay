import React, { useState } from 'react';

import Profiles from './Profiles/Profiles';
import NewProfile from './NewProfile/NewProfile';
import './App.css';

function App() {

  const [profiles, setProfiles] = useState([
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

  const addNewProfile = newProfile => {
    setProfiles(prevState => {
      return [newProfile, ...prevState];
    })
  }

  return (
    <div className="App">
      <h1>Form overlay</h1>
      <NewProfile onNewProfileAddition={addNewProfile} />
      <Profiles profiles={profiles} />
    </div>
  );
}

export default App;
