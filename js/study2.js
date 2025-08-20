//상태
const state = {
    showSeconds: true,
    is24h: true,
    paused:false,
    locale: 'ko-KR'
};

//요소참조
const $time = document.getElementById('time');
const $date = document.getElementById('date');

//유틸 : 0 채우기
const pad = (n) => String(n).padStart(2,'0');

//시각 그리기
function render(now = new Date()){


    const h24 = now.getHours();
    const hours = state.is24h ? h24 : (h24% 12 || 12);
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    //깜박이는 클론
    const colonNodes = $time.querySelectorAll('.blinker');
    colonNodes.forEach(c => c.classList.toggle('off'));

    const h = pad(hours);
    const m = pad(minutes);
    const s = pad(seconds);

    $time.innerHTML = state.showSeconds
        ? `${h}<span class="blinker">:</span>${m}<span class="blinker">:</span>${s}`
        : `${h}<span class="blinker">:</span>${m}`;

        //날짜 표시 
    const options = {weekday: 'long',year: 'numeric', month: '2-digit', day:'2-digit'};
    $date.textContent = now.toLocaleDateString(state.locale, options);

   
} 
setInterval(() => render(), 1000);
    render();
    // ===== 컨트롤 이벤트 바인딩 =====
const $toggle1224    = document.getElementById('toggle-12-24');
const $toggleSeconds = document.getElementById('toggle-seconds');
const $pause         = document.getElementById('pause');
const $locale        = document.getElementById('locale');
const $copy          = document.getElementById('copy-time');

// 12/24시간 전환
if ($toggle1224) {
  $toggle1224.addEventListener('click', () => {
    state.is24h = !state.is24h;
    // 버튼 라벨/상태 업데이트
    $toggle1224.textContent = state.is24h ? '24시간' : '12시간';
    $toggle1224.setAttribute('aria-pressed', String(state.is24h));
    render(); // 즉시 다시 그리기
  });
}

// 초 표시/숨김
if ($toggleSeconds) {
  $toggleSeconds.addEventListener('click', () => {
    state.showSeconds = !state.showSeconds;
    $toggleSeconds.textContent = state.showSeconds ? '초 표시' : '초 숨김';
    $toggleSeconds.setAttribute('aria-pressed', String(state.showSeconds));
    render();
  });
}



// 현재 시각 복사
if ($copy) {
  $copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText($time.innerText.trim());
      // 원하면 토스트/알림 추가
    } catch (e) {
      console.error('클립보드 복사 실패', e);
    }
  });
}