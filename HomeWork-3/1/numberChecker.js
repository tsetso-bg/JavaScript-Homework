function printNumbers(n) {
var str = '';
    if (inputN < 0) {
        console.log('NO');
    }
    for (var i = 2; i <= inputN; i += 1) {
        if (((i%4)!=0)&&((i%5)!=0)) {
           str += ','+ i
        }
        

    }

    console.log('1'+str);

}


var inputN =  -5;
printNumbers();
