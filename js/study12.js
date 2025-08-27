const textInput = document.querySelector('input');
const textContent = document.querySelector('p');
const inputBtn = document.querySelector('button');


inputBtn.addEventListener('click',function(){
    let inputValue = textInput.value;
    textContent.textContent = inputValue;
})
