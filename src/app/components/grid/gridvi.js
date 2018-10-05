// import React, {Component} from 'react';
// import {FormGroup, ControlLabel, FormControl, HelpBlock, Feedback} from 'react-bootstrap';
//
// class Gridvi extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       validacion: 'initial'
//     }
//
//     this.handleChange = this.handleChange.bind(this);
//
//   };
//
//   getValidationState() {
//     const length = this.state.value.length;
//     if (length > 10) {
//       return 'success';
//     } else if (length > 5) {
//       return 'warning';
//     } else if (length > 0) {
//       return 'error';
//     };
//     return null;
//   }
//
//   handleChange(e) {
//     this.setState({value: e.target.value});
//     const length = this.state.value.length;
//     if (length > 10) {
//       this.setState({validacion: 'OK'});
//     } else if (length > 5) {
//       this.setState({validacion: 'Menor a 10'});
//     } else if (length > 0) {
//       this.setState({validacion: 'Menor a 5'});
//     };
//   }
//
//   render() {
//     return (<form>
//       <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
//         <ControlLabel>Working example with validation</ControlLabel>
//         <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange}/>
//         <HelpBlock>{this.state.validacion}</HelpBlock>
//       </FormGroup>
//     </form>)
//   }
// }
//
// export {
//   Gridvi
// };

import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Feedback, Button} from 'react-bootstrap';
import {agregarProducto} from '../../../actionCreators';
import {connect} from 'react-redux';


class Gridvi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      price: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.agregarProducto = this.agregarProducto.bind(this);


  };

  handleChange(e) {
    this.setState({id: e.target.value});
    this.setState({name: e.target.value});
    this.setState({price: e.target.value});
  }

  // Se debe hacer uso de una función aparte de props para poder tener acceso a this:
  agregarProducto() {
    let singleProduct = new Object;
    singleProduct.id = this.state.id;
    singleProduct.name = this.state.name;
    singleProduct.price = this.state.price;
    this.props.agregarProducto (singleProduct);
  }

  render() {
    return (<form>
      <ControlLabel>id</ControlLabel>
      <FormControl type="text" value={this.state.id} placeholder="Enter text" onChange={this.handleChange}/>
      <ControlLabel>name</ControlLabel>
      <FormControl type="text" value={this.state.name} placeholder="Enter text" onChange={this.handleChange}/>
      <ControlLabel>price</ControlLabel>
      <FormControl type="text" value={this.state.price} placeholder="Enter text" onChange={this.handleChange}/>
      <Button bsStyle="primary"  onClick={this.agregarProducto} > Agregar Producto </Button>
    </form>)
  }
}

const mapStateToProps = (state) => {
  return {singleProduct: state.singleProduct};
};

const mapDispatchToProps = dispatch => {
  return {
    agregarProducto: (singleProduct) => {
      dispatch(agregarProducto(singleProduct))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Gridvi);
