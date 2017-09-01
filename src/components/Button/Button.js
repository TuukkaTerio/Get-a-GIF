import React from 'react';
import './Button.css';

export default function Button(props){
  return(
    <button className='keywordBtn' onClick={props.updateKeyword}>{props.keyword}</button>
  );
}
