import React from 'react';
import VolumenIcon from '../../icons/components/volumen';
import './volume.css';

export default function Volume(props){
  return(
    <div className="volume">
      <VolumenIcon 
        color="white"
        size={25}
      />
      <div className="volume-range">
        <input 
          type="range"
          min={0}
          max={1}
          step={.05}
          onChange={props.handleVolumeChange}
        />
      </div>
    </div>
  )
}