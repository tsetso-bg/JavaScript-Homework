function findMostFreqNum(value){
var current = value[0];
var count=1;
    var maxCaunt=1;
    var rezult;
    var maxValue=value[0];
    value.sort(function(a, b){return a-b});
//    console.log(value);

    for( var i = 1 ; i<value.length; i+=1){
        if(value[i] === value[i-1]){
            count +=1;
            if(maxCaunt<count){
                maxCaunt=count;
                maxValue = value[i-1];
            }

        }else{

            count=1;
        }

    }

//    if(count=1)(
//        maxValue = value[0]
//        )
rezult = maxValue + ' '+ '('+ maxCaunt +' times )' ;
return rezult;

}
console.log(findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
