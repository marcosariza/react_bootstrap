import React, {Component} from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Feedback,
  Checkbox,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap';

import Calendar from 'react-input-calendar';

class Form2vd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
      selectMultValue: [],
      fecha: new Date()
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSelectMult = this.handleSelectMult.bind(this);
    this.handleSelectDate = this.handleSelectDate.bind(this);
  };

  handleSelect(e) {
    this.setState({selectValue: e.target.value});
  }

  handleSelectMult(e) {
    let i = 0;
    let arreglo = [];
    let cantidadelementos = e.target.length;

    while (i < cantidadelementos) {
      if (e.target[i].selected == true) {
        arreglo.push(e.target[i].value);
      }
      i++;
    };

    this.setState({selectMultValue: arreglo});
  }

  handleSelectDate(e) {
    this.setState({fecha: e});

  }

  render() {
    return (<form>

      {/******************* Select Control ***************************/}
      <ControlLabel>Select Control:</ControlLabel>
      <FormControl componentClass="select" placeholder="select" value={this.state.selectValue} onChange={this.handleSelect}>
        <option value="opcion1">opcion1</option>
        <option value="opcion2">opcion2</option>
        <option value="opcion3">opcion3</option>
        <option value="opcion4">opcion4</option>
      </FormControl>

      {/******************* Static Text ***************************/}
      <ControlLabel>Static Text:</ControlLabel>
      <FormControl.Static>{this.state.selectValue}</FormControl.Static>

      {/******************* Select Multiple ***************************/}
      <ControlLabel>Multi Select Control:</ControlLabel>
      <FormControl componentClass="select" multiple={true} value={this.state.selectMultValue} onChange={this.handleSelectMult}>
        <option value="opcion1">opcion1</option>
        <option value="opcion2">opcion2</option>
        <option value="opcion3">opcion3</option>
        <option value="opcion4">opcion4</option>
      </FormControl>

      {/******************* Select Multiple ***************************/}
      <ControlLabel>Data Picker:</ControlLabel>
      <Calendar format='DD/MM/YYYY' computableFormat='DD/MM/YYYY' date={this.state.fecha} onChange={this.handleSelectDate} closeOnSelect={true}/>



    </form>)
  }
}

export {
  Form2vd
};
