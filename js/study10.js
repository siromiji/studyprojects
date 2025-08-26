const redBtn = document.querySelector(".redBtn");
const blueBtn = document.querySelector(".blueBtn");
const greenBtn = document.querySelector(".greenBtn");
const background = document.querySelector("body");

redBtn.addEventListener("click",function(){
    background.style.backgroundColor="red";
})
blueBtn.addEventListener("click",function(){
    background.style.backgroundColor="blue";
})
greenBtn.addEventListener("click",function(){
    background.style.backgroundColor = "green";
})