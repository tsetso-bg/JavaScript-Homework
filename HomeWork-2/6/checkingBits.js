function bitChecker(value) {
    var bin =1;
    if(((value) & (bin<<3))==8){
        return true;
    }
    else{
        return false;
    }
}

//function bitChecker(value) {
//    return ((value >> 3) & 1) == 1;
//}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));



