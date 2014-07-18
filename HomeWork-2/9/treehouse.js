function treeHouseCompare(value) {
    var areaHouse = (Math.sqrt(3)/4*input[0]*input[0])+(input[0]*input[0]);
    var areaTree = (Math.PI*((input[1]/3*4)*(input[1]/3*4))/4+(input[1]*(input[1]/3)));
    if (areaHouse > areaTree) {
        console.log('house/' + areaHouse.toFixed(2));
    }else{
        console.log('tree/'+areaTree.toFixed(2));
    }
}

var input=[4,5];

treeHouseCompare(input);