//function calcSupply(value) {
//    return  (arguments[1]-arguments[0])*365*arguments[2];
//}
//
//console.log(calcSupply(20, 87,2)+'kg of chocolate would be enough until I am 87 years old.');




function calcSupply(value) {
    var arr =[];
    arr[0] = arguments[0];
    arr[1] = arguments[1];
    arr[2] = arguments[2];
    arr[3] = arguments[3];
 console.log((arr[1]-arr[0])*365*arr[2]+'kg of '+ arr[3]+' would be enough until I am ' + arr[1]+' years old.');

};

calcSupply(38,
118,
0.5,
'chocolate');
