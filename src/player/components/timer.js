import React from 'react';
import './timer.css';

function formattedTimer(secs){
  const minutes = parseInt(secs / 60 , 10);
  const seconds = parseInt(secs % 60 , 10); 
  return `${minutes} : ${seconds}`
}


export default function Timer(props){
  return(
    <div className="timer">
      <p>
        <span>
            {
            formattedTimer(props.currentTime)
            } 
              / 
            {
              formattedTimer(props.duration)
            }
        </span>
      </p>
    </div>
  )
}