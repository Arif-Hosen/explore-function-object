// addition
function addition(number1, number2) {
    console.log('Numbers=', number1, number2);
    var sum = number1 + number2;
    return sum;
}
var total = addition(20, 30);
console.log('Add result=', total);

// substraction
function substractNumbers(num1, num2) {
    console.log("numbers=", num1, num2);
    var sub = num1 - num2;
    return sub;
}
var result = substractNumbers(40, 55);
console.log('Sub Result=', result);

// multiplication
function multiplyNumbers(num1, num2) {
    console.log("numbers=", num1, num2);
    var mul = num1 * num2;
    return mul;
}
var result = multiplyNumbers(40, 10);
console.log('Mul Result=', result);

// division
function divideNumbers(num1, num2) {
    console.log("numbers=", num1, num2);
    var div = num1 / num2;
    return div;
}
var result = divideNumbers(56, 7);
console.log('Div Result=', result);