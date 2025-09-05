import{ useState} from "react";

export default function Counter(){
    const [n , setN] = useState(0);
    return(
        <div>
            <h3>카운터: {n}</h3>
            <button onClick={()=> setN(n+1)}>+1</button>
            <button onClick={() => setN(n - 1)}>-1</button>
            <button onClick={()=> setN(0)}>리셋</button>
        </div>
    )
}