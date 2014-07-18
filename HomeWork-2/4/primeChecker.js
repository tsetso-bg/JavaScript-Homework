function isPrime(value){
   var max= Math.sqrt(value);
    for (var i = 2; i <= max; i += 1) {
        if (value % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));



//var num =8;
//var rez = true;
//var del = 2;
//for (var i = 2; i <= Math.sqrt(num); i++) {
//    if (num % i == 0) {
//        rez= false;
//    }
//    del+=1;
//}
//console.log(rez);

