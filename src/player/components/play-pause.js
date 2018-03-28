import React from 'react';
import './play-pause.css';
import Pause from '../../icons/components/pause';
import Play from '../../icons/components/play';

export default function PlayPause(props){
  return(
    <div className = "play-pause">
      <button>
        <Play size={25} color="white"/>
      </button>
      <button>
        <Pause size={25} color="white"/>
      </button>
    </div>
  )
}