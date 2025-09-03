const btn = document.getElementById("btn");
//콜백함수
btn.addEventListener("click",function(){
    document.body.style.backgroundColor = "skyblue";
});
//화살표함수
btn.addEventListener("click", ()=>{
    console.log("버튼 클릭됨!")
});
//차이 : 화살표 함수는 this가 다르게 동작

