// import React from 'react';
import React from 'react';

// create component function called Item that takes in props as an argument
function Item(props) {
  return (
    // return a list item with the text from props and the font from props
    <li style={{fontFamily: props.font}}>{props.text}</li>
  );
}
// export the component
export default Item;

