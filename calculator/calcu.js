let screens=document.querySelector(".screen");
let buttons=document.querySelectorAll(".btn");
let btnequal=document.querySelector(".btnequal");
let clrbtn=document.querySelector(".btnclear");
buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        let value=e.target.dataset.num;
        screens.value+=value;
    })
})
btnequal.addEventListener("click",function(e){
    if(screens.value===""){
        screens.value="";
    }
    else{
        let answer=eval(screens.value);
        screens.value=answer;
    }
})
clrbtn.addEventListener("click",function(e){
    screens.value="";
})

