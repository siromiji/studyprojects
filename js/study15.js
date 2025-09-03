const characters = ["용사", "마법사","도적","궁수"];
const btn = document.getElementById("make");
btn.addEventListener("click",()=>{
    const random = characters[Math.floor(Math.random() * characters.length)];
    alert('새로운 캐릭터: ${random}');
})
