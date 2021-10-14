// function bringSingara(taka) {
//     console.log('singara ano', taka, 'takar');
//     console.log('mama singara den');
// }
// bringSingara(200);
// var money = 300;
// bringSingara(money);//varible set

// function return
function bringSingara(taka) {
    console.log('singara ano', taka, 'takar');
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

var money = 300;
var singara = bringSingara(money);
console.log(singara);