const textInput  = document.querySelector("#textInput");
const container = document.querySelector("#container");
let coinP = document.querySelector('#coin');

let coin = 0;

textInput.addEventListener('keydown' , (event)=>{
    
    if( event.key === 'Enter'){
        const promptResult = prompt('얼마를 적립하시겠습니까?','100');
        let amount = Number(promptResult);

        if(isNaN(amount)){
            alert("숫자를 입력해주세요!");
            return;
        }

        
        const item = document.createElement("div");
        item.textContent = `${textInput.value}     +${promptResult}`;
         
        item.dataset.amount = amount;
        //dataset이 뭐지
        container.appendChild(item);
        textInput.value="";
    }
    

});

container.addEventListener('click',(e)=>{
    const item = e.target;
    if(!item.dataset.amount)return;
    
    const amount = Number(item.dataset.amount);
    coin += amount;
    coinP.textContent = coin;

    item.remove();
})