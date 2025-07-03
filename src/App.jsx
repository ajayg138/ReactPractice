import { useState } from "react";
import ClickButton from "./Button";
import Header from "./Header";
import Login, { Image } from "./UserComponent";
import Counter from "./Counter";
import Toggle from "./Toggle";
import { MultiCond } from "./MultiCond";
import { User } from "./User";
import { College } from "./College";
import { Student } from "./Student";
import { EgDefaultProps } from "./EgDefaultProps";
import { Wrapper } from "./Wrapper";
import Skills from "./Skills";

function App() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("Ajay Gole")

  const[nam,setNam] = useState("");
  const[pass, setPass]=useState("");
  const[email,setEmail]=useState("");
  // let name="Ajay...";
  // let age=23;
  // let email="ajaygole728@gmail.com";
  let userObj = {
    name: "Ajay",
    age: 23,
    email: "ajayg@gmail.com",
  };
  let userObj2 = {
    name: "Ajay",
    age: 23,
    email: "ajayg@gmail.com",
  };

  let collegeArr = ["CAET", "DYP", "COEP", "MIT", "VJTI"];

  const[name, setName]=useState("Vijayyyy...");

  return (
    <div>
      {/* <Header />
      <Login />
      <Image />
      <h1>hello...</h1>
      <Color />
      <ClickButton />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <OuterFunction />
      <br />
      <br />
      <EgState />
      <br />
      <br />
      <Counter />
      <br />
      <br />
      <Toggle />
      <br />
      <br />
      <MultiCond />
      <br />
      <br />
      <College col={collegeArr[0]} />
      <College col={collegeArr[1]} />
      <College col={collegeArr[2]} />
      <College col={collegeArr[3]} />
      {/* <User name={name} age={age} email= {email}/> */}
      {/* <User user={userObj} />
      <User user={userObj2} />
      <br />
      <br />
      
      <Student name={name}/>
      <button onClick={()=>setName(name=="Vijayyyy..."?"Ajayyy...":"Vijayyyy...")}>Change Name</button>
      <br />
      <br />
      <EgDefaultProps name="Ajay..."/>
      <EgDefaultProps name="Vijay..."/>
      <EgDefaultProps />
      <EgDefaultProps />
      <EgDefaultProps />
      <br />
      <br />
      <Wrapper color="orange">
        <h1>Hello Children...</h1>
      </Wrapper>
      <Wrapper>
        <h1 style={{color:"pink"}}>Hello Ajay...</h1>
      </Wrapper>
      <Wrapper color="red">
        <h1>Hello Vijay...</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello Children...</h1>
      </Wrapper>
      <h1>Input Field...</h1>
      <input type="text" value={val} onChange={(eventt)=>setVal(eventt.target.value)} placeholder="Enter Text Here"></input>
      <h2>{val}</h2>
      <button onClick={()=>setVal("")}>Clear</button>
      <br></br>
      <br></br>
      <form action="" method="get">
        <input type="name" value={nam} onChange={(e)=>setNam(e.target.value)} placeholder="Enter Name"></input>
        <br></br>
        <br></br>
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Enter Password"></input>
        <br></br>
        <br></br>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
        <br></br>
        <br></br>
        <button onClick={()=>{setNam("");setPass(""),setEmail("")}}>clear</button>
        <h2>{nam}</h2>
        <h2>{pass}</h2>
        <h2>{email}</h2> */} 
      {/* </form> */}
      <h1>Hellooo</h1>
      <Skills/>
    </div>
  );
}

export default App;

export function Color() {
  function add(a, b) {
    return a + b;
  }

  function click() {
    alert("Clicked function called....");
  }
  return (
    <>
      <h1>Red Color</h1>
      <h1>Addition: {add(1, 20)}</h1>
      <button onClick={click}>called</button>
      <br />
    </>
  );
}

const fruit = (name) => {
  alert("Outer: " + name);
};
export function OuterFunction() {
  // const fruit=(name)=>{
  //   alert("Inner: "+name);
  // }

  return (
    <>
      <h1>Event Calling...</h1>
      <button onClick={() => fruit("Apple")}>Apple</button>
      <br />
      <br />
      <button onClick={() => fruit("Banana")}>Banana</button>
    </>
  );
}

export function EgState() {
  const [fruit, setFruit] = useState("Apple");
  function handliClick() {
    setFruit("Banana");
  }

  return (
    <>
      <h1>State Eg.</h1>
      <h1>{fruit}</h1>
      <button onClick={handliClick}>Click here</button>
    </>
  );
}
