import {createStore} from 'redux';

const reducer = (state, action) => {
console.log('Funcion reductora');
  if (action.type === "POBLAR_TABLA") {
    return {
      ...state,
      products: state.products = action.products
    }

  };

  return state;
}


export default createStore(reducer, { products: [] } )
