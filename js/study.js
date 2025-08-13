const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

//챗봇 응답 사전
const responses = {
    "안녕":  "안녕하세요!",
    "이름이 뭐야":"저는 미세먼지 알림봇이에요!",
    "뭐해" : "당신과 이야기하고 있어요!",
    "잘가" : "다음에 또 만나요",
}

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
    messages.scrollTop = messages.scrollheight;
}

function handleSend() {
    const input = userInput.ariaValueMax.trim();
    if (!input) return;

    addMesseage(input, "user");

    const lower = input.toLowerCase();
    let redply = "죄송해요, 이해하지 못했어요ㅠㅠ";

    for (let key in responses){
        if (lower.includes(key)){
            redply = responses[key];
            break;
        }
    }
    
}