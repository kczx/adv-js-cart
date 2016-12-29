var Product = function (options) {
  var self = {},
    options = options || {},
    name,
    price,
    color;

  var init = function () {
    self.setColor(options.color);
    self.setName(options.name);
    self.setPrice(options.price);
  };

  self.setName = function (nameToSet) {
    name = nameToSet;
  };

  self.setPrice = function (priceToSet) {
    price = priceToSet;
  };

  self.setColor = function (colorToSet) {
    color = colorToSet;
  };

  self.getColor = function () {
    return color;
  };

  init();

  return self;
};

var FoodProduct = function (options) {
  var self = new Product(options);

  self.isGlutenFree = function () {
    return false;
  };

  return self;
};