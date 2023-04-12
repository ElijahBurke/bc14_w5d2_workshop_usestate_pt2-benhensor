// import React from 'react';
import React from 'react';

// create component function called Input that takes in props as an argument
function Input(props) {
  // return an input element with the onChange and value props
  return <input className="textInput" type="text" onChange={props.onChange} value={props.value}></input>;
}
// export the component
export default Input;