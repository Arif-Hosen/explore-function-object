var computer = {
    price: 23000,
    color: 'black',
    processor: 'intel i3'
};
// object read
console.log(computer);

// property read
console.log(computer.price);

var comPrice = computer.price; //different way read
console.log(comPrice);

// set a value of a object property 3 ways
//way-1
computer.price = 15000;
console.log(computer);

//way-2
computer['price'] = 12500;
console.log(computer);

//way-3
var priceProperty = 'price';
computer[priceProperty] = 5000;
console.log(computer);
