// TODO:
// var products = []
var products = [
  { referenceNumber: 1001, name: "Is it worth it?", price: 10 },
  { referenceNumber: 1002, name: "Get over it", price: 20 },
  { referenceNumber: 1003, name: "Candle", price: 30 },
  { referenceNumber: 1004, name: "Backpain cushion", price: 30 },
  { referenceNumber: 1005, name: "Vegan Yoga T-shirt", price: 200 },
  { referenceNumber: 1006, name: "The plush yoga pants", price: 300 },
  { referenceNumber: 1007, name: "Bring Yoga out of your Life", price: 30 },
  { referenceNumber: 1008, name: "Darkness in Yoga", price: 10 }
]
// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = []
// Declare `products`, the different that you will be selling under each of the departments.

var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();

  // Add the product with the matching referenceNumber to the shoppingCart
  console.log(refNr)

  function check(checkRefNr) {
    return checkRefNr.referenceNumber == refNr
  }
  var received = products.find(check)
  console.log(received)
  shoppingCart.push(received)
  console.log(shoppingCart)


  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  displayTotalPrice(/*The variable holding the total price*/);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
};

var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents

  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
// Use window.prompt to ask the user a question and capture their response,
  var inputNumber = prompt ('What is your reference number?')
// then, return the response from this function back to our caller
  return  inputNumber;
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
