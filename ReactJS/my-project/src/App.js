import React, { useState } from 'react'
import './App.css';
import { Employee } from './Employee';
import Hemanth from './Hemanth';
import { Jobs } from './Jobs';
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
      <Jobs />
    </div>
  );
}

export default App;
