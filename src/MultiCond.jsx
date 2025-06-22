import { useState } from "react"

export const MultiCond=()=>{
    const[count,setCount]=useState(0);

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        {
        count==0?<h1>Condition0</h1>:
        count==1?<h1>Condition1</h1>:
        count==2?<h1>Condition2</h1>:
        count==3?<h1>Condition3</h1>:
        count==4?<h1>Condition4</h1>:
        count==5?<h1>Condition5</h1>:
        count==6?<h1>Condition6</h1>:
        <h1>Other Condition...</h1>
}
        </>
    )

}