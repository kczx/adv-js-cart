(function () {
  'use strict';

  var myCart = new Cart();
  var newProduct = new Product({
    name: 'rower', 
    price: '20',
    color: 'yellow'
  });
  myCart.addProduct(newProduct);

  var batonik = FoodProduct({
    name: 'batonik',
    price: '50'
  });

  myCart.addProduct(batonik);

  console.log(newProduct.getColor());

  console.log(myCart.isInCart({})); // true
}());