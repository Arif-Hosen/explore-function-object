//variable
var bookPrice = 2000;

//array
var phone = ['iphone', 'lg', 'oppo', 'vivo'];

phone[3] = 'samsung';
console.log(phone);

//condition
// check walton not exists in an array
if (phone.indexOf('walton') == -1) {
    console.log('walton is missing');
}

//check available oppo in an array
if (phone.indexOf('oppo') != -1) {
    console.log('oppo is available');
}

//loop
// var i = 0;
// while (i <= 100) {
//     console.log('numbers=', i);
//     i++;
// }

// for (i = 0; i < 40; i++) {
//     console.log(i);
// }

//function
function addFourNumbers(num1, num2, num3, num4) {
    var total = num1 + num2 + num3 + num4;
    return total;
}

var sum = addFourNumbers(20, 30, 15, 25);
console.log(sum);

// object
var laptop = {
    price: 20000,
    color: 'black',
    brand: 'dell'
}
console.log(laptop);
console.log(laptop.brand);

// switch
var number = 11;
switch (number) {
    case 10:
        console.log('smaller than 20');
        break;
    case 20:
        console.log('equal 20');
        break;
    case 35:
        console.log('large than 20');
        break;
    default:
        console.log('nothing');

}