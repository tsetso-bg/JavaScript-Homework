function variablesTypes(value){

    var a=  typeof (input[0]);
    var b=  typeof (input[1]);
    var c=  typeof (input[2]);
    var d=  typeof (input[3]);

    console.log('My name: '+ input[0]+ '  //type ot '+typeof (input[0])  );
    console.log('My age:  '+ input[1]+ '  //type ot '+typeof (input[1])  );
    console.log('I am male: '+ input[2]+ '  //type ot '+typeof (input[2])  );
    console.log('My favorite foods are: '+ input[3]+ '  //type ot '+typeof (input[3])  );

};

var input=['Pesho', 22, true, ['fries', 'banana', 'cake']];

variablesTypes(input);