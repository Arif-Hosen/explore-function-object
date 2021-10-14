// 1 variable
var name = " arif ";

// 2 array
var tableItems = ['book', 'pen', 'bag', 'calculator'];
var bagIndex = tableItems.indexOf('bag');
console.log(bagIndex);
var item = tableItems[1];
console.log(item);
tableItems[2] = 'mobile';
console.log(tableItems);
tableItems.push('pencil');
console.log(tableItems);
tableItems.pop();

// 3 conditional
if (tableItems[3] == 'calculator') {
    console.log("I am calculator");
}
else {
    console.log('I am not calculator');
}

// 4 while loop
var i = 0;
while (i < 10) {
    console.log(i);
    console.log('I am good');
    i++;
}

// for loop
for (var i = 0; i <= 20; i++) {
    console.log(i);
    console.log('Hello World');
}