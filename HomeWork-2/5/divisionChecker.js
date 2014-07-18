function divisionBy3(value) {

    var sumOfDigits=0;
    while (value > 0) {

        sumOfDigits += value % 10;
        value = Math.floor(value / 10);
    }
    console.log(sumOfDigits);
    if (sumOfDigits % 3 == 0) {
      return console.log('the number is  divided by 3 without remainder');
    }
    else{
       return console.log('the number is not divided by 3 without remainder');
    }
}

divisionBy3(12);
divisionBy3(13);
divisionBy3(591);

