const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const color = document.getElementById('color');
const size = document.getElementById('size');
const sizeVal = document.getElementById('sizeVal');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const saveBtn = document.getElementById('save');
const preview = document.getElementById('preview');

//초기 배경을 흰색으로 채워서 "지우개 = 흰색 그리기"가 보이도록
function fillWhite(){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
fillWhite();
//상태
let drawing = false;
let last = { x : 0, y :0};
let erasing = false;

//미리보기 점 
function updatePreview() {
    preview.style.background = erasing ? "#ffffff" : color.value;
}
updatePreview();

//좌표 보정
function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    //PointerEvent(clientX/Y) 사용: 스크롤/여백 고려 
    const x = (e.clientX - rect.left);
    const y = (e.clientY - rect.top);
    return {x,y};
}

//그리기
function drawLine(a,b){
    ctx.strokeStyle = erasing ? "#ffffff" : color.value;
    ctx.lineWidth = Number(size.value);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round'; 

    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
}

//포인터 이벤트
canvas.addEventListener('pointerdown',(e)=>{
    drawing = true;
    last = getPos(e);
    canvas.setPointerCapture(e.pointerId);

});

canvas.addEventListener('pointermove', (e) =>{
    if (!drawing) return;
    const now =getPos(e);
    drawLine(last, now);
    last =now;
});

canvas.addEventListener('pointerup',(e)=>{
    drawing = false;
    canvas.releasePointerCapture(e.pointerId);
});
canvas.addEventListener('pointerleave',() => {drawing = false;});

//UI 이벤트
size.addEventListener('input',() => {sizeVal.textContent = size.value + 'px'});
color.addEventListener('input',updatePreview);

eraserBtn.addEventListener('click',()=>{
    erasing = !erasing;
    eraserBtn.classList.toggle('btn',erasing === false);
    eraserBtn.classList.toggle('light',erasing ===true);
    eraserBtn.textContent = erasing ? '펜' : '지우개';
    updatePreview();
});

clearBtn.addEventListener('click', () => {
    fillWhite();
});

saveBtn.addEventListener('click',()=>{
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'drawing.png';
    a.click();
});

// 단축키: B(펜), E(지우개), Ctrl+s(저장), Delete (전체 지우기)
window.addEventListener('keydown',(e)=>{
    if (e.key.toLowerCase() === 'e') {erasing = true; eraserBtn.textContent = '펜'; updatePreview();}
    if (e.key.toLowerCase() === 'b') {erasing = false; eraserBtn.textContent = '지우개'; updatePreview();}
    if (e.key ==='Delete') {fillWhite();}
    if((e.ctrlKey || e.metaKey)&& e.key.toLowerCase()=== 's'){
        e.preventDefault(); saveBtn.click();
    }
});

