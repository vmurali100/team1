import React, { useState } from 'react'
import './App.css';
import Hemanth from './Hemanth';
import { Parent } from './Parent';
import { UserForm } from './UserForm';
import { Users } from './Users';

function App() {
  const [age, setage] = useState(25);
  const [users, setusers] = useState(["Sai", "Hemanth", "Raghu", "Saranaya"])
  const changeAge = () => {
    setage(age + 5)
  }
  return (
    <div className="App">
      {/* <Hemanth age={age} changeAgeFunc={changeAge} users={users} /> */}
      {/* <Parent /> */}
      {/* <Users /> */}
      {/* <UserForm /> */}
      <Users />
    </div>
  );
}

export default App;
