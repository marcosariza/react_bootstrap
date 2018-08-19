import React from 'react';
import {render} from 'react-dom';
import {Alert} from 'react-bootstrap';
import {App} from './app';
// var Alert = require('react-bootstrap').Alert;


//render(<Alert bsStyle="warning">
//  <strong>Holy guacamole!</strong>
//  Best chec.appself, you're not looking too good.
//</Alert>, document.getElementById('app'));


render(<App />, document.getElementById('app'));

console.log("Funciona super ok :-)");
