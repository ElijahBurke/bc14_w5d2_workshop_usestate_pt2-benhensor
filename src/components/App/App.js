// imports of other components
import React from "react";
import {useState} from 'react';
import "./App.css";
import Input from "../Input";
import Item from "../Item";



// create component function called App
function App() {
  // create a state variable called text and a function to update it called setText
  const [text, setText] = useState("");
  // create a function called handleChange that takes in an event as an argument
  function handleChange(event) {
    // call the setText function with the value from the event
    setText(event.target.value);
  }
  // return the JSX
  return (
    // return a div with the Input component and the Item component
    <div className="App">
      {/* pass the handleChange function to the Input component as the onChange prop */}
      <Input onChange={handleChange} value={text}/>
      {/* pass the text state variable to the Item component as the text prop */}
      <Item text={text} font="Arial"/>
      <Item text={text} font="Roboto"/>
      <Item text={text} font="Fantasy"/>
      <h1>JSX will go here!</h1>
    </div>
  );
}
// export the component
export default App;
