import React from 'react';

export default function ProgressBar(props){
  return(
    <div>
      <input
        type="range"
        min={0}
        max={500}
      />
    </div>
  )
}