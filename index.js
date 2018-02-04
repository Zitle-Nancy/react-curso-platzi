import React from 'react';
import { render } from 'react-dom'; //Una forma de hacerlo
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

render( < Playlist data = {data} /> , app);

