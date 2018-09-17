import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import store from '../../../store';
import {poblarTabla} from '../../../actionCreators';

let unsubscribe;

class Gridvd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };

// Cuando se subscribe un objeto automaticamente retorna una función de dar de baja la suscripción
  unsubscribe =  store.subscribe(() => {
      this.setState({products: store.getState().products});
    });

     this.poblarTabla = this.poblarTabla.bind(this);

  };

  componentDidMount() {
    console.log('componentWillMount: Componente a punto de montarse en DOM');
    this.poblarTabla();
  };

// Para evitar errores, al desmontar el objeto se debe dar de baja la suscripción
componentWillUnmount(){
    console.log('componentWillUnMount: Componente a punto de desmontarse del DOM');
    unsubscribe();
};


  poblarTabla() {
    console.log('funcion poblar tabla');
    const productos = [];
    store.dispatch(poblarTabla(productos));
  };

  render() {
    // const products = [{id:'123', name: 'Marcos2', price: 100}, {id:'123', name: 'Marcos', price: 100}];

    const products = this.state.products;
    const columns = [
      {
        dataField: 'id',
        text: 'Product ID'
      }, {
        dataField: 'name',
        text: 'Product Name'
      }, {
        dataField: 'price',
        text: 'Product Price'
      }
    ];
    return (<div>
      <BootstrapTable keyField='id' data={products} columns={columns}/>
    </div>)
  }
}

export {
  Gridvd
};
