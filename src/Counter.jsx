import { useState } from "react";

const Counter=()=>{

    const[count,setCount] = useState(0);
    const[rcount, setRcount]=useState(100);

    function handleClick(){
        setCount(count+1);
    }

    return(
        <>
        <h1>Counter...</h1>
        <h1>Increase Counter: {count}</h1>
        <button onClick={handleClick}>Counter ++</button>
        <br/>
        <h1>Decrease Counter: {rcount}</h1>
        <button onClick={()=>{setRcount(rcount-1)}}>Counter --</button>
        </>
    )
}

export default Counter;