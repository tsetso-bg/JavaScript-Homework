function reverseString(value) {
    var res = value.split("");
    console.log( res);
    res.reverse();
    var final = res.join('');
//console.log(res);
    return final;
}

console.log(reverseString('sample'));
console.log(reverseString('softUni'));
console.log(reverseString('java script'));