const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

async function getDust(sido = "대구"){
    const API_KEY = "Bu0Q7aL8MT74Yajk0n0YMWu46DT%2FWI%2FDTcxOpm07sqvtfvrDhoqfaNbQj%2Fh1tuaErnieuAxFJEetrjvPMCAbJg%3D%3D"
    const url = `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${API_KEY}&returnType=json&sidoName=${sido}&numOfRows=1&pageNo=1`

    try{
        const res = await fetch(url);
        const data = await res.json();
        const item = data.response.body.items[0];
        const pm10 = parseInt(item.pm10Value);
        
        //미세먼지 등급 판정
        let grade = "";
        if (pm10 <= 30){
            grade = "좋음";
        }else if(pm10 <= 80){
            grade = "보통";
        }else if(pm10 <= 150){
            grade = "나쁨"
        }else{
            grade = 매우나쁨
        }
        return `${sido} ${item.stationName}의 미세먼지 수치는 ${grade}상태입니다.`
    }catch (err){
        console.error("API 호출 오류:", err);
        return "미세먼지 정보를 불러오지 못했어요."
    }

}


//챗봇 응답 사전
let responses = {};
fetch("../json/study1.json")
    .then(res => res.json())
    .then(data => {
        responses = data;
    })
    .catch(err => console.error("응답불러오기 실패",err));

// 사용자 메시지든 챗봇 응답이든 채팅창에 표시할 때 사용하는 함수 
//매개변수 : 'text':말풍선 안에 들어갈 메세지 내용
//sender : "user" 또는 "bot" 말풍선 스타일을 다르게 하기 위해 사용됨
function addMesseage(text , sender)
{
    const div = document.createElement("div");

    //"sender"는 "user" 또는 "bot"이고,해당 값을 클래스 이름으로 추가함
    div.classList.add(sender);
    //말풍선 div안에 실제 보여줄 text를 넣는 부분
    div.innerText = text;
    //.messages라는 채팅창에 방금 만든 말풍선 <div>를 붗이기
    messages.appendChild(div);
    //채팅창 스크롤이 자동으로 맨 아래로 내려가게 함 
    messages.scrollTop = messages.scrollHeight;
}

//사용자가 메세지를 보내면 챗봇이 응답하는 로직
function handleSend() {
    // 입력창에 사용자가 쓴 텍스트를 trim으로 공백제거하고 가져옴
    const input = userInput.value.trim();
    //입력값이 비어있거나 공백만 있는 경우 함수 종료
    if (!input) return;
    //사용자 입력을 채팅창에 말풍선으로 표시 user클래스를 붙여서 말풍선을 오른쪽으로 
    addMesseage(input, "user");

    // 입력을 소문자로 변환 대소문자 구분 없이 검색하기 위해 
    const lower = input.toLowerCase();

  //만약 메세지에 "미세먼지"라는 단어가 포함되어 있으면
    if(lower.includes("미세먼지")){
        //지원하는 지역 목록 (더 추가 가능)
        const cities = ["서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주"]
        
        //입력에 포함된 지역명 찾기
        let foundCity = cities.find(city => lower.includes(city));

        //지역명을 못 찾으면 기본값은 대구로
        if(!foundCity) foundCity = "대구";

        getDust(foundCity).then(reply => addMesseage(reply, "bot"));
        userInput.value = "";
        return;
    }
    // 사용자가 무슨 말을 하든 기본적으로 이 말을 출력하도록 설정
      //아무 키워드도 못 찾았을 경우의 기본 응답
    let reply = "죄송해요, 이해하지 못했어요ㅠㅠ";
    
    //responses객체의 모든 키 안녕 ,뭐해 등을 하나씩 확인 
    //사용자 입력 lower에 키워드가 포함되어 있으면 해당 응답을 reply변수에 저장
    //break 첫번 째 키워드만 반응하도록 반복문 중단 
    for (let key in responses){
        if (lower.includes(key)){
            reply = responses[key];
            break;
        }
    }
    //지정된시간 500ms 후에 addMesseage 함수를 이용해 챗봇 응답을 화면에 표시
    setTimeout(() => addMesseage(reply, "bot"), 500);
    userInput.value = "";
    
}

sendBtn.addEventListener("click", handleSend);
userInput.addEventListener("keydown", (e)=>{
    if (e.key ==="Enter") handleSend();
});
