function findMinAndMax(value) {
    function order(a, b) {
        return (a == b) ? 0 : a < b ? -1 : 1;
    }
    value = value.sort(order);
    console.log('MIN -> '+value[0]);
    console.log('MAX -> '+value [value.length-1]);

}

findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);