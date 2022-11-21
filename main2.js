//function test(day) 
//{
//var  num;
    //switch (day) {
      //case  "monday" : return num=1;
     //break;
      //case "tuesday" : return num= 2;
      //break;
      //case "wednesday" : return num=3;
     //break;
      //case "thursday" : return num= 4;
     //break;
      //case "friday" : return num=5 ;
      //break;
    
      //default : return 'please enter a valid day'
   // }
//}console.log(test(num));
function redundant(str){
let result=0;

  for (let i = 0; i < str.length; i++) 
    if (str.indexOf(str[i]) ===i) {
    
  result++;
      return result;
}
}
console.log(redundant("ibtiissem"));


function multiples(num,array){
  let tab=[];
let b=0;
for (let i = 0; i <array; i++)
  {
     tab.push(num*i);
      
    }

 return tab;

  }
console.log(multiples(7,5));
function value (obj)
{let tab=[];
  
  let a= Object.keys(obj);
  let b= Object.values(obj);
 

 


return ([a,b]);



}console.log(value({ a: 1, b: 2, c: 3 }));
function intWithinBounds (n,a,b){
if (n>=a&n<b && typeof n == "integer"){
  return true;
}else{
    return false;
  }
}
console.log(intWithinBounds(4.5, 3, 8));

function checkEquals(arr1, arr2){
for(let i=0;i<arr1.length;i++)
if (arr1==arr2) {
 
return true;
 
} else {

 return false;
}
}console.log(checkEquals

 let arr= [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];

console.log(_.compact(arr));
function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    
  arr=  arr2.concat(...arr);
 }
   return arr;
}
console.log(flatten([[1, 2], [3, 4]]) );
function reverse(str){
 for(i=0;i<str.length;i++)  
words=str.split(" ");
 reversewords=words.reverse();
 string=reversewords.join(" ");
return string;
}console.log(reverse("the sky is blue") );
function calculator(a,opp,b){
if (opp="/"){
  return a/b;

}else if(opp="+"){
return a+b;
}
}
console.log (calculator(5, "+", 2));

function dis(price,discount){
disc=(price*discount/100);
discprice=price-disc;
return discprice;

}console.log(dis(1500,50));
function object(names,jobs){
let names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"];
let jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"];
obj={};
if(a.length == b.length ){
result=names.keys[i]=jobs.keys[i];
//return result;

//}

//}console.log(obj);
