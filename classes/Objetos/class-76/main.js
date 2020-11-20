// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increment = function(value) {
  this.price += value;
};

Product.prototype.decrement = function(value) {
  this.price -= value;
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);

const shirt = new Shirt('Regata', 7.5, 'Preta');
shirt.increment(10);
console.log(shirt);