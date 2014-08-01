
var rezult = [2, 1, 1, 2, 3, 3, 3,3, 2];

var current=rezult[0];
console.log(rezult[0]);
var  count =1;
 var final=[];
for (var i =1 ; i<= rezult.length-1; i+=1 ){
            if(current === rezult[i]){
            count+=1;
            }  else{
                final= rezult.splice(rezult.length-(rezult.length-i),count)   ;
                current = rezult[i];
                count =1;

            }

}
     console.log(final);

