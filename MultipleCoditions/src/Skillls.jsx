// Handle checkboxes
import { useState } from "react";
function Skillls() {
    const [skills, setSkills] = useState([]);
    const handleSkills = (event) => {
      console.log(event.target.value, event.target.checked);
      if (event.target.checked) {
        setSkills([...skills,event.target.value])
      } else {
        setSkills([...skills.filter((item)=>item!=event.target.value)])
      }
    }

  return (
    <div>
      <h3>Select Your Skills</h3>
      <input onChange={handleSkills} type="checkbox" id="php" value="php"/>
      <label htmlFor="php">PHP</label>
      <br></br>
      <input onChange={handleSkills} type="checkbox" id="js" value="js"/>
      <label htmlFor="js">JS</label>
      <br></br>
      <input onChange={handleSkills} type="checkbox" id="py" value="py"/>
      <label htmlFor="py">Python</label>
      <br></br>

      <input onChange={handleSkills} type="checkbox" id="css" value="css"/>
      <label html
      For="css">CSS</label>

      <h1>{skills.toString()}</h1>
    </div>
  );
}
export default Skillls;
