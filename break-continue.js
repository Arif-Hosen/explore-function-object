// loop break
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
//     if (i == 4) {
//         break;
//     }
// }

// for (var i = 0; i < 8; i++) {
//     console.log(i);
//     if (i > 2) {
//         break;
//     }
// }

var arr = [22, 65, 84, 94, 49, 90];
// for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     console.log(num);
//     if (arr[i] > 50) {
//         break;
//     }
// }

// loop continue
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (num > 90) {
        continue;
    }
    console.log(num);
}
