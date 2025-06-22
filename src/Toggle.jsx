import { use, useState } from "react";
import { UserCom } from "./UserCom";

const Toggle=()=>{
const[display,setDisplay]=useState(true);
const[login,setLogin]=useState(true);

return(
    <>
    <h1>Toggle Button</h1>
    {
       login && display?<UserCom/>:null
    }
    <button onClick={()=>setDisplay(!display)}>Toggle B</button>
    </>
)

}

export default Toggle;