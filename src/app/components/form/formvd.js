import React, {Component} from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Feedback,
  Checkbox,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap';

class Formvd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      validacion: 'initial',
      mailValue: '',
      passwordValue: '',
      fileValue: '',
      checkboxValue1: '',
      checkboxValue2: '',
      radioValue: [],
      textAreaValue: ''
    }

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  };

  getValidationState() {
    const length = this.state.textValue.length;
    if (length > 10) {
      return 'success';
    } else if (length > 5) {
      return 'warning';
    } else if (length > 0) {
      return 'error';
    };
    return null;
  }

  handleChangeText(e) {
    this.setState({textValue: e.target.value});
    const length = this.state.textValue.length;
    if (length > 10) {
      this.setState({validacion: 'OK'});
    } else if (length > 5) {
      this.setState({validacion: 'Menor a 10'});
    } else if (length > 0) {
      this.setState({validacion: 'Menor a 5'});
    };
  }

  handleChangeMail(e) {
    this.setState({mailValue: e.target.value});
  }

  handleChangePassword(e) {
    this.setState({passwordValue: e.target.value});
  }

  handleChangeFile(e) {
    this.setState({fileValue: e.target.value});
  }

  handleChangeCheckbox(e) {
    /* alert (e.target.name);*/
    if ( e.target.name = 'opcion1' ){
      this.setState({checkboxValue1: e.target.checked});
    } else if ( e.target.name = 'opcion2' ){
      this.setState({checkboxValue2: e.target.checked});
    }

  }

  handleChangeRadio(e){
    this.setState({ radioValue: e });
  }

  handleTextArea(e) {
    this.setState({textAreaValue: e.target.value});
  }


  render() {
    return (<form>
      {/* Cuadro IMPUT */}
      <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        <ControlLabel>Working example with validation</ControlLabel>
        <FormControl type="text" value={this.state.textValue} placeholder="Enter text" onChange={this.handleChangeText}/>
        <HelpBlock>{this.state.validacion}</HelpBlock>
      </FormGroup>

      {/* Cuadro para CORREOS */}
      <ControlLabel>e-mail:</ControlLabel>
      <FormControl type="email" value={this.state.mailValue} placeholder="Enter email" onChange={this.handleChangeMail}/>

      {/* Cuadro para PASSWORD */}
      <ControlLabel>password:</ControlLabel>
      <FormControl type="password" value={this.state.passwordValue} onChange={this.handleChangePassword}/>

      {/******************** Cuadro para FILE *********************/}
      <FormGroup>
      <ControlLabel>Archivo:</ControlLabel>
      <FormControl type="file" value={this.state.fileValue} onChange={this.handleChangeFile}/>
      </FormGroup>

      {/******************** TEXT AREA *********************/}
      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Textarea</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" value={this.state.textAreaValue} onChange={this.handleTextArea} />
      </FormGroup>

      {/******************* Checkbox ***************************/}
      <FormGroup>
      <ControlLabel>Checkbox:</ControlLabel>
      <Checkbox name="opcion1" checked={this.state.checkboxValue} onChange={this.handleChangeCheckbox} inline={true}>Opción</Checkbox>
      <Checkbox name="opcion2" checked={this.state.checkboxValue} onChange={this.handleChangeCheckbox} inline={true}>Opción</Checkbox>
      </FormGroup>

      {/******************* Radio Buttom ***************************/}
      <ToggleButtonGroup type="radio" name="options" defaultValue={1} value={this.state.radioValue} onChange={this.handleChangeRadio}>
        <ToggleButton value={1}>Radio 1</ToggleButton>
        <ToggleButton value={2}>Radio 2</ToggleButton>
        <ToggleButton value={3}>Radio 3</ToggleButton>
      </ToggleButtonGroup>


    </form>)
  }
}

export {
  Formvd
};
