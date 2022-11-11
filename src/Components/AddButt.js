import React from 'react';
import './Style.css';

const Button = (props) => { 
  return ( 
    <>
    <button className="Button" onClick ={props.onClick}>Add</button> 
    </>
  ); 
  
} 

export default Button;