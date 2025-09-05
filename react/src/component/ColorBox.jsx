import React, {useState} from "react";

function ColorBox(){
    const[color,setColor] = useState("skyblue");

    //랜덤 색상 생성 함수 
    const getRandomColor = () =>{
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i<6;i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    };

    return(
        <>        <div style={{textAlign:"center",marginTop:"50px"}}></div>
        <div
        style={{
            width:"200px",
            height:"200px",
            backgroundColor: color,
            margin: "20px auto",
            borderRadius: "10px",
            border: "2px solid black" 
        }}>
            <button onClick={()=> setColor(getRandomColor())}>
            색상바꾸기
        </button>

        </div>
        </>

            );
}
export default ColorBox;