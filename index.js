import React from 'react';
// import ReactDOM from 'react-dom'; //version antigua
import { render } from 'react-dom'; //Una forma de hacerlo
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';
// para enviar numeros es {123}..numeros
render( < Playlist data = {data} /> , app);

