var Cart = function () {
  var self = {},
    products = [];

  self.addProduct = function (product) {
    if (typeof product.getName !== 'function' || 
        typeof product.getPrice !== 'function') {
      throw new Error("it's not a valid product");
    }
    console.log("added a product", name);

    products.push(product);

    return product;
  };

  self.isInCart = function (product) {
    return products.indexOf(product) !== -1;
  };

  return self;
};