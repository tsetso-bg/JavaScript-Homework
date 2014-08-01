function createArray(value)  {
    var arr=[];
    for (var i = 0; i < 20; i+= 1) {
        arr[i]=(i*5)  ;
    }
    return arr;
}
console.log(createArray());
