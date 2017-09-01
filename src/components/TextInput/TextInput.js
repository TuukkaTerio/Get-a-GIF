import React from 'react';
import './TextInput.css';

export default function TextInput(props){
  return(
    <input type="text" name="keywordInput" className="TextInput" onKeyDown={props.keyPress}/>
  );
}
