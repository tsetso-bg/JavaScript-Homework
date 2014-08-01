function maximum(value){
    var current = [value[0]];
    var max = [value[0]];
        for (var i = 1; i< value.length; i+=1){
            if(value[i] < value[i-1] ){
              current.push(value[i]);
                if (current.length > max.length){
                max = current;
                }
        }else{
            current= [value[i]];
            }
        }

    return max;

}
console.log(maximum([1,-1,-3,1,5]));