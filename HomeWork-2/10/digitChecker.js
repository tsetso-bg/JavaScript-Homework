function checkDigit(value) {
    var str = value.toString();
    if (str[str.length-3]=='3') {
        console.log(true);
    }else{
        console.log(false);
    }
}
var input = [25368];
checkDigit(input);



