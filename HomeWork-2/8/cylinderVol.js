// ------------------- 1 ------------------------- //

function calcCylinderVol(value) {
    var vol = Math.PI * arguments[0] * arguments[0] * arguments[1];
    console.log(vol.toFixed(3));
}
calcCylinderVol(2,4);
calcCylinderVol(5,8);
calcCylinderVol(12,3);




// ------------------- 2 ------------------------- //

function calcCylinderVol(value) {
    var vol = Math.PI * input[0] * input[0] * input[1];
    console.log(vol.toFixed(3));
}

var input = [2,4];
calcCylinderVol(input);