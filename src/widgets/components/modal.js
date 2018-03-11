import React from 'react';
import './modal.css';

export default function Modal(props){
  return(
    <div class= "Modal">
      Esto es un modal
      {props.children}
      <button onClick={props.handleClick}>Cerrar</button>
    </div>
  )
}
