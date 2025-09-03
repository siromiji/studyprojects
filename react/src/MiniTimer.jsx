import { useState, useEffect} from "react";

export default function MiniTimer(){
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (running && time > 0){
            timer = setInterval(()=> setTime((t) => t - 1),1000);
        }else if (time === 0){
            setRunning(false);
        }
        return () => clearInterval(timer);
    }, [running,time]);

    const startTimer = () =>{
        setTime(10);
        setRunning(true);
    };

    return(
        <div style={{border: "1px solid #cc",padding:"10px",margin: "10px"}}>
            <h2>미니 타이머</h2>
            <h3>{time > 0 ? time : "시간 끝!"}</h3>
            <button onClick={startTimer}disabled={running}>
                시작
            </button>

        </div>

    )

}