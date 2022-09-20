//button like
let likes=document.getElementsByClassName('like');
for(let i=0; i<likes.length; i++){
  let likebtn=likes[i];
   likebtn.addEventListener("click", ()=>{
    if(likebtn.firstElementChild.style.color=="black"){
      likebtn.firstElementChild.style.color="red";
    }else{
      likebtn.firstElementChild.style.color="black";
    }
   })
}


//minus btn
let min=document.getElementsByClassName('minus-btn');
for (let i=0;i<min.length;i++){
  let y=min[i];
  y.addEventListener("click", ()=>{
    if(y.nextElementSibling.value>0){
      y.nextElementSibling.value--;
   
    }
    price1()
    price2()
    price3()
    total()
  })
}

//plus btn 
let plus=document.getElementsByClassName('plus-btn');
for (let i=0;i<plus.length;i++){
  let x=plus[i];
  x.addEventListener("click", ()=>{
      x.previousElementSibling.value ++;
      price1()
  price2()
  price3()
  total()
  })
}


//item delete
var removebtn=document.getElementsByClassName('delete')
  console.log(removebtn)
  for (var i=0;i < removebtn.length ;i++) {
  var button=removebtn[i];
  button.addEventListener('click',removeitem);
  }
  function removeitem(event){
    var itemclick=event.target;
    itemclick.parentElement.remove();
   
  price1()
  price2()
  price3()
  total()
  }

  //total price
  function price1(){
    let price=document.getElementById("p1");
    let qte=document.getElementById("q1");
    price.innerText=1379*qte.value;
      }
      price1()

  function price2(){
let price=document.getElementById("p2");
let qte=document.getElementById("q2");
price.innerText=176*qte.value;
  }
  price2()

  function price3(){
    let price=document.getElementById("p3");
    let qte=document.getElementById("q3");
    price.innerText=500*qte.value;
      }
      price3()
      
//total
function total(){
var x= document.getElementById("p1").innerText;
var y= document.getElementById("p2").innerText;
var z= document.getElementById("p3").innerText;
let total=document.getElementById("finalPrice");
total.value=parseInt(x)+parseInt(y)+parseInt(z);
}
   
