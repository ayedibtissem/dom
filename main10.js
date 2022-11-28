
let Count=0;
let increment=document.querySelector(".btn-increment");
let decrement=document.querySelector(".btn-decrement");
let  count =document.querySelector("#quantity");
let  totalcount =document.querySelector("#price");

 increment.addEventListener("click",()=>{
  let add=  Count++;
  count.value=add;
  totalcount.innerHTML=add*100;  
   })
   decrement.addEventListener("click",()=>{
    
   if(Count=>2){
    let sub =--Count;
    count.value=sub;
    totalcount.innerHTML=sub*100; 
   }

   })

   