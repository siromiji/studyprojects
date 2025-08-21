


//DOM 참조 
const $question = document.getElementById('question');
const $askBtn = document.getElementById('askBtn');
const $anotherBtn = document.getElementById('anotherBtn');
const $resultWrap = document.getElementById('result');

const $quote = document.getElementById('quote');
const $echo = document.getElementById('echo');

let loadedQuotes=[];

const randInt = (min,max)=> Math.floor(Math.random() * (max-min+1))+min;

$askBtn.disabled = true;
$anotherBtn.disabled = true;

async function loadQuotes(){
    try{
        const res = await fetch('../json/study4.json',{cache: 'no-cache'});
        if(!res.ok) throw new Error(`HTTP ${res.status}`);
        loadedQuotes = await res.json();
        
        if(!Array.isArray(loadedQuotes) || loadedQuotes.length === 0){
            throw new Error('study4.json이 비어있거나 형식이 잘못됨');
        }

        //로딩 성공 ->버튼 활성화
        $askBtn.disabled  = false;
        $anotherBtn.disabled =false;
        

    }catch(err){
        console.error('quotes 로드 실패',err);
        //최소한의 플백
        loadedQuotes = ["준비 중입니다. 잠시 후 다시 시도해 주세요"];
        $askBtn.disabled = false;
        $anotherBtn.disabled = false;
    }
}

function openRandomPage() {
    if(!loadedQuotes.length)return;

    const idx = randInt(0,loadedQuotes.length - 1);

    $quote.textContent = loadedQuotes[idx];

    const q = $question.value.trim();
    $echo.textContent = q ? `질문:"${q}"`: "";
    $resultWrap.hidden = false;
}

$askBtn.addEventListener('click',openRandomPage);
$anotherBtn.addEventListener('click',openRandomPage);

$question.addEventListener('keydown' , (e) =>{
    if (e.key ==='Enter'){
        openRandomPage();
    }
})

loadQuotes();