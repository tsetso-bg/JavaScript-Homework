function convert(pkW) {
    var constant = 0.746;
    var pHp = (pkW/constant).toFixed(2);
    return pHp;
}
console.log(convert(75));
console.log(convert(150));
console.log(convert(1000));