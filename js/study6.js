const player = document.getElementById("player");
let x = 0, y = 0; //캐릭터 좌표
const speed = 10; //이동 속도(px)

window.addEventListener("keydown" , (e) =>{
    if (e.key === "ArrowRight") x += speed;
    if (e.key === "ArrowLeft")  x -= speed;
    if (e.key === "ArrowDown")  y += speed;
    if (e.key === "ArrowUp")    y -= speed;

    player.style.left = x + "px";
    player.style.top = y + "px";
});

