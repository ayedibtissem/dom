var totalprice = document.getElementById("totalp");
var sum = 0;
// Plus Button
function plusClick(id) {
  console.log(id);
  let quantity = document.getElementById("q" + id[1]);
  quantity.innerHTML = parseInt(quantity.innerHTML) + 1;

  let total = document.getElementById("t" + id[1]);
  let price = document.getElementById("s" + id[1]);

  total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);

  sum = parseInt(price.innerHTML) + sum;
  totalprice.innerHTML = sum;
}
function minusClick(id) {
    
    let quantity = document.getElementById("q" + id[1]);
    
  
    if(parseInt(quantity.innerHTML)>0){
  
    
  quantity.innerHtml=parseInt(quantity.innerHtml) -1;
    }
    let total = document.getElementById("t" + id[1]);
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
  
    sum = parseInt(price.innerHTML) + sum;
    totalprice.innerHTML = sum;
}