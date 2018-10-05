import {createStore} from 'redux';

const reducer = (state, action) => {
console.log('Funcion reductora');
  if (action.type === "POBLAR_TABLA") {
    if (state.products.length > 0) {
      action.products = state.products;
    };

    return {
      ...state,
      products: state.products = action.products
    }

  } else if (action.type === "AGREGAR_PRODUCTO") {
    return {
      ...state,
      products: state.products.concat( action.singleProduct ) }
  };

  return state;
}


export default createStore(reducer, { products: [], singleProduct: new Object } )
