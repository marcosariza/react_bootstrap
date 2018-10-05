import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import store from '../../../store';
import {poblarTabla} from '../../../actionCreators';

// 1- @react-redux El objetivo de react-redux es separar el componente del store, por ejemplo para
// facilitar las pruebas de Jazmine y Jest al crear store ficticios.
// 2- @react-redux requiere envolver el componente <app> con <Provider> en el archivo index.js

import {connect} from 'react-redux';

// let unsubscribe;

class Gridvd extends Component {

  // 3- @react-redux no requiere que haya constructores ya que el actual como un suscriptor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: []
  //   };
  //
  //    Cuando se subscribe un objeto automaticamente retorna una función de dar de baja la suscripción
  //   unsubscribe = store.subscribe(() => {
  //     this.setState({products: store.getState().products});
  //   });
  //
  //   this.poblarTabla = this.poblarTabla.bind(this);
  //
  // };

  componentDidMount() {
    console.log('componentWillMount: Componente a punto de montarse en DOM');

    // 4- @react-redux: Para acceder a las funciones o la los estados se utilizan las propiedades de los componentes:
    // this.poblarTabla();
    this.props.poblarTabla();
  };

  //  5- @react-redux no hace falta suscribir no desuscribir, se usa mapStateToProps
  //  Para evitar errores, al desmontar el objeto se debe dar de baja la suscripción
  // componentWillUnmount() {
  //   console.log('componentWillUnMount: Componente a punto de desmontarse del DOM');
  //   unsubscribe();
  // };

  // 6- @react-redux sustituye la función store.dispatch con mapDispatchToProps
  // poblarTabla() {
  //   console.log('funcion poblar tabla');
  //   const productos = [];
  //   store.dispatch(poblarTabla(productos));
  // };

  render() {
    // const products = [{id:'123', name: 'Marcos2', price: 100}, {id:'123', name: 'Marcos', price: 100}];

    const products = this.props.products;
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

    const options = {
      onRowClick: function(row) {
        alert('ok');
      }
    };

    return (<div>
      <BootstrapTable keyField='id' data={products} columns={columns} options={options}/>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {products: state.products};
};

const mapDispatchToProps = dispatch => {
  return {
    poblarTabla: () => {
      const productos = [];
      dispatch(poblarTabla(productos))
    }
  };
};

// @react-redux se exporta el objeto usando la función connect para unir  mapStateToProps y mapDispatchToProps  al componente
// export {
//   Gridvd
// };
export default connect(mapStateToProps, mapDispatchToProps)(Gridvd);
