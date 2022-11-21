// msg="Hello WORLD";
 //console.log(msg);
//function square(num){
   
 //return num*num;
 //}
 //console.log(square(4));
 
 //function vowel(string){
//count=0;
//vowel="aeoiu";
    //for(i=0;i<string.length;i++){
      //if  (vowel.indexOf(string[i]) !== -1){
        
      //count++;
      //}
      

    //}
    //return count;
  //} 
//console.log(vowel("ibtissoppem"));
//function reverse(num)
//{
   // 
    
//return num.split().reverse();

//} 
//console.log(number(reverse(127)));
//function order(string){
    //return string.split('').sort().join('');
//}
//console.log(order("ibtissemayed"));
 //num1=10;
 //num2=-12;
//num3=7;
//if(num1>)

//function test(a) { 
  //var y=a*10;
  //if(y=0){
////return y
 // }
//}return"enter a positive number"
//function extract(string){
  var string = "ibtissemayed";
result = string.slice(-3);
return result;
}
console.log(extract());

function remove(a){
  a = "ayedibtissem";
result1 =a.slice(3); 
return result1;

}console.log(remove());
function extract(a){
a="ayedibtissem";
result=a.slice(0, a.length / 2);
return result;
}
console.log(extract(a));
function remove(a){
  a="ayedibtissem";
  result=a.slice(0,a.length-3);
  return result;
}console.log(remove());


 

function negative(array){
  
let result=0;

for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      result++;
}
}
return result;

}
console.log(negative([-5,10,-2,-9,-7]));

function remove(array, b) {
  var array=[10,14,8,7];
  var b=3;
  
    for (var i=0;i< array.length; i++; )
    {
      if(array[i] == b) {
       result= array.splice(array.indexOf(b), 1);
       return result;
      }
    }
  }
  

  console.log(remove());