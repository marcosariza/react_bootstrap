import React, {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class Gridvd extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    const products = [{id:'123', name: 'Marcos', price: 100}, {id:'123', name: 'Marcos', price: 100}];
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
