function checkBrackets(value){
    var myArray = value.split('');
//    console.log(myArray);
    var left=0;
    var right =0;
//    var first = value[0];
    for (var i =0; i<value.length; i+=1){
    if(value[i]=== '('){
        left +=1;
    }if(value[i]=== ')'){
            right +=1;
        }

    }
var rezult =left-right;
//   return rezult;

    if (rezult == 0){
        return 'correct';
    }else{
        return 'incorrect';

    }

}

console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
