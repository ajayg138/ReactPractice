import React, { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
    const handleSkills=(e)=>{
        console.log(e.target.value, e.target.checked);
        if(e.target.checked){
            setSkills([...skills, e.target.value]);
        }else{
            setSkills(skills.filter((item) => item !== e.target.value));
        }
    }

  return (
    <div>
      <h3>Skill sets</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="js" value="js" />
      <label htmlFor="js">JS</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="node" value="node" />
      <label htmlFor="node">NODE</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="java" value="java" />
      <label htmlFor="java">JAVA</label>
      <br />
      <br />
      <h2>{skills.toString()}</h2>
    </div>
  );
};

export default Skills;
