let checkBox = document.querySelector("#toggle");
let password = document.querySelector("#password");

checkBox.addEventListener('change',function(e){
    if (e.target.checked){
    console.log("체크 되었습니다.");
    password.setAttribute('type','text');

    }else{
        console.log("체크 되지 않았습니다.");
        password.setAttribute('type','password')
    }
})

