import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Feedback} from 'react-bootstrap';

class Gridvi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      validacion: 'initial'
    }

    this.handleChange = this.handleChange.bind(this);

  };

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) {
      return 'success';
    } else if (length > 5) {
      return 'warning';
    } else if (length > 0) {
      return 'error';
    };
    return null;
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    const length = this.state.value.length;
    if (length > 10) {
      this.setState({validacion: 'OK'});
    } else if (length > 5) {
      this.setState({validacion: 'Menor a 10'});
    } else if (length > 0) {
      this.setState({validacion: 'Menor a 5'});
    };
  }

  render() {
    return (<form>
      <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Working example with validation</ControlLabel>
        <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange}/>
        <HelpBlock>{this.state.validacion}</HelpBlock>
      </FormGroup>

    </form>)
  }
}

export {
  Gridvi
};
