function Produto(name, price, amount) {
  this.name = name;
  this.price = price;
  this.amount = amount;

  Object.defineProperty(this, 'amount', {
    enumerable: true, // pode mostrar a chave ?
    value: amount, // valor
    writable: false, // pode alterar o valor ?
    configurable: false // pode reconfigurar a propriedade com defineProperty ?
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true, // pode mostrar a chave ?
      value: name, // valor
      writable: true, // pode alterar o valor ?
      configurable: true // pode reconfigurar a propriedade com defineProperty ?
    },
    price: {
      enumerable: true, // pode mostrar a chave ?
      value: price, // valor
      writable: true, // pode alterar o valor ?
      configurable: true // pode reconfigurar a propriedade com defineProperty ?
    },
  })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(Object.keys(p1));