function sortArray(value) {

    function order(a, b) {
        return (a == b) ? 0 : a < b ? -1 : 1;
    }
value = value.sort(order);
return value;
}

console.log(sortArray([5, 4, 3, 2, 1]));
console.log(sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]));
