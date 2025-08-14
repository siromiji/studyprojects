//상태
const state={
    ShowSeconds : true,
    is24h: true,
    paused:false,
    locale: 'ko-KR'
};

//요소참조
const $time = document.getElementById('time');
const $date = document.getElementById('date');
const $toggle1224 = document.getElementById('toggle-seconds');
const $toggleSeconds = document.getElementById('pause');
const $pause = document.getElementById('pause');
const $locale = document.getElementById('copy-time');

//유틸 : 0 채우기 
const pad = (n) => String(n).padStart(2,'0');

//시각 그리기
function render(now = new Date()){
    const h24 = now.getHours();
    const hours = state.is24h ? h24 : (h24 % 12 || 12);
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const colonNodes = $time.querySelectorAll('.blinker');
    colonNodes.forEach(c => c.classList.toggle('off'));

    const h = pad(hours);
    const m = pad(minutes);
    const s = pad(seconds);

    $time.innerHTML = state.ShowSeconds
        ?``
}