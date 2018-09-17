const  poblarTabla = (productos) => {
  productos = [
    {
      id: '123',
      name: 'Marcos2',
      price: 100
    }, {
      id: '123',
      name: 'Marcos',
      price: 100
    }
  ];

  return {
      type : "POBLAR_TABLA",
      products: productos
  };

};


export {poblarTabla};
