
const plusBtn  = document.querySelector(".plusbtn");
const minusBtn = document.querySelector(".minusbtn");
const count = document.querySelector("h1");
let contentNum = 0;
plusBtn.addEventListener("click",function(){
    contentNum += 1;
    count.innerHTML = contentNum;

})
minusBtn.addEventListener("click",function(){
    contentNum -= 1;
    count.innerHTML = contentNum;
})