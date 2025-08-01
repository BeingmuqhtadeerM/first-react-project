// import { useState } from "react";
// import User from "./Users";
// import Skillls from "./Skillls";
// import Usesr from "./Usesr";
// import College from "./College";
// import Student from "./Student";
// import User from "./User";
// import Wrapper from "./Wrapper";
/*
function App() {
    const [count, setCount] = useState(0);

    return(
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Counter</button>
            {
                count == 0 ? <h1>Condition 0</h1>
                :count == 1 ? <h1>Condition 1</h1>
                :count == 2 ? <h1>Condition 2</h1>
                :count == 3 ? <h1>Condition 3</h1>
                :count == 4 ? <h1>Condition 4</h1>
                :<h1>None</h1>
            }
        </>
    )
 }

 export default App;
 */

// import { useState } from "react";

//  Props in javaScript
/*   This is the normal method to pass the props but these are the static things 
function App() {
    return(
        <div>
            <h1>Props in React Js</h1>
            <Usesr name="Muqhtadeer" age={21} email="muhammedmuzawar9@gmail.com" />
        </div>
    )
} 
export default App;

// what if they are in any state shown below

function App() {
  let userName = "Muhtradeer";
  let age = 29;
  let email = "muham@gmail.com";
  return (
    <>
      <h1>Name : {userName} Age : {age} Email: {email}</h1>
    </>
  );
}
export default App;
*/

// what if we have lots of things to include we cant create h1 tag for many tags like that then we can use the Objects in React

/*
function App() {
  let userObject = {
    name: "Muqhtadeer",
    age: "29",
    email: "Muhamed@gmail.com",
  };

  // also we can use for the multiple objects
  let userObj2 = {
    name: "MM",
    age: "30",
    email: "mm@gmail.com",
  };

  let collegeNames = ["IET", "DU", "MIT", "IIT", "NIT"];
  const [student, setStudent] = useState()
  return (
    <>
      <h1>Props in React in JS</h1>
      <Usesr user={userObject} />
      <Usesr user={userObj2} />
      <College name={collegeNames[0]} />
      <College name={collegeNames[1]} />
      <College name={collegeNames[2]} />
      <College name={collegeNames[3]} />
      { student && <Student name = {student}/>}
      <button onClick={()=> setStudent("MMM")}>Update Student Name</button>
      <User />
      <User namee="MMM4"/>

    </>
  );
}
export default App;

function App() {
    return (
        // Styling the element using Css
        <div >
            <h1>Props in React Js</h1>
            <Wrapper>
                <h1>Hello Everyone</h1>
            </Wrapper>
            <Wrapper>
                <h1>Hello Everyone</h1>
            </Wrapper>
            <Wrapper>
                <h1>Hello Everyone</h1>
            </Wrapper>
            <Wrapper>
                <h1>Hello Everyone</h1>
            </Wrapper>
            <Wrapper>
                <h1>Hello Everyone</h1>
            </Wrapper>

        </div>
    )
}
export default App;
*/

/* get the iinput Value 

function App() {
    const [val,setVal]=useState("Muhtadeer")
    return (
        <div>
            <h1>Get Input field Value</h1>
            <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter User Name" />
            <h1>{val}</h1>
            <button onClick={()=>setVal("")}>Clear Value</button>
        </div>
    )
}
export default App;



function App() {
    return(
        <div>
            <h1>Handle Checkbox in React js</h1>
            <Skillls />
        </div>
    )
}

export default App;



function App() {

    const [gender, setGender] = useState('')
    const [city, setCity] = useState('')
    return (
        <div>

            <h1>Handle the radio buttons and Drop downs</h1>
            <h4>Select Gender</h4>
            <input value={"male"} onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" id="male" /> 
            <label htmlFor="male">Male</label>
            <input value={"female"} onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" checked={gender=='female'} id="male" />
            <label htmlFor="male" >Female</label>
            <h4>Selected Gender :{gender}</h4>

            <br></br>
            <h4>Select the appropirate City</h4>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={"nepal"}>
                <option value="nepal">Nepal</option>
                <option value="uae">UAE</option>
                <option value="us">USA</option>
                <option value="un">UN</option>

            </select>
        </div>
    )
}

export default App;


function App() {
  const userNames = ["anil", "sam", "loakath"];
  const userData = [
    {
      name: "anil",
      age: "25",
      email: "anil@gmail.com",
      id: 1,
    },
    {
      name: "sam",
      age: "36",
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "loakath",
      age: "77",
      email: "lock@test.com",
      id: 3,
    },
  ];

  return (
    <div>
      <h1>loop in jsx with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br></br>
      <h4>Dummy Data</h4>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>anil</td>
            <td>anil@test.com</td>
            <td>25</td>
          </tr>
          <tr>
            <td>1</td>
            <td>anil</td>
            <td>anil@test.com</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;


function App() {
  const userData = [
    {
      name: "anil",
      age: "25",
      email: "anil@gmail.com",
      id: 1,
    },
    {
      name: "sam",
      age: "36",
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "loakath",
      age: "77",
      email: "lock@test.com",
      id: 3,
    },
  ];
  return(
    <div>
        <h4>Reuse the div components in Loop</h4>
        {
            userData.map((user)=> (
                <div key={user.id}>
                    <User data={user}/>
                </div>
            ))
        }
        
    </div>
  )
}
export default App;

// making clock 
import Clock from "./Clock"
import { useState } from "react";
function App() {

    const [color, setColor] = useState('red'); 
    return(
        <>
            <h1>The First Clock in React JS</h1>
            <Clock color={color}/>

            <select onChange={(event)=> setColor(event.target.value)}>
                <option value={"red"}>Red</option>
                <option value={"blue"}>Blue</option>
                <option value={"orange"}>Orange</option>
                <option value={"green"}>Green</option>
            </select>
        </>
    )
}
export default App;

import College from "./College";
function App() {
  const collegeData = [
    {
      name: "IET alwar",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "anil",
          age: "34",
          email: "anil@gmail.com"
        },
        {
          name: "petre",
          age: "43",
          email: "peter@gmail.com"
        },
        {
          name: "abi",
          age: "12",
          email: "abi@gmail.com"
        }
      ]
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iit.com",
      student: [
        {
          name: "anil",
          age: "34",
          email: "anil@gmail.com"
        },
        {
          name: "petre",
          age: "43",
          email: "peter@gmail.com"
        },
        {
          name: "abi",
          age: "12",
          email: "abi@gmail.com"
        }
      ]
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "www.kciet.com",
      student: [
        {
          name: "anil",
          age: "34",
          email: "anil@gmail.com"
        },
        {
          name: "petre",
          age: "43",
          email: "peter@gmail.com"
        },
        {
          name: "abi",
          age: "12",
          email: "abi@gmail.com"
        }
      ]
    }
  ]
  return(
    <div style={{
      backgroundColor: "#111",
      padding: "20px",
      borderBottom: "2px solid ",
      margin: "20px",
      borderRadius: "10px"
    }}>
      <h1>Nested Looping with Component</h1>
      {
        collegeData.map((college, index)=> (
          <div key={index}>
            <College  college={college}/>
          </div>
        ))
      }
    </div>
  )
}
export default App;


import Counter from "./Counter";
import { useEffect, useState } from "react";
function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(()=>{
    callOnce();
  }, [])
  function callOnce() {
    console.log("CallOnce function called")
  }
  return (
    <>
      <h1>UseEffect of Hook</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
      <button onClick={()=>setData(data+1)}>Data {data}</button>
      <Counter />
    </>
  )
}
export default App;


import Counter from "./Counter";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)
  const [display, setDisplay] = useState(true)
  return (
    <div>
      {
        display? <Counter count = {count} data= {data}></Counter>: null
      }
      <button onClick={()=>setCount(count+1)} >Counter {count}</button>
      <button onClick={()=>setData(data+1)} >Data {data}</button>
      <button onClick={()=> setDisplay(!display)}>Toggle</button>
    </div>
  )
}

export default App;


import { useState } from "react";
function App() {
  const [cardStyle, setCardStyle] = useState( 
    {
      border: "2px solid grey",
      width: "250px",
      boxShadow: "1px 1px black",
      margin: "10px",
    }
  )
  const [grid, setGrid] = useState(true)
  const [textColor, setTextColor] = useState('green')
  const updateTheme = (bgColor, textColor)=> {
    setCardStyle({...cardStyle, backgroundColor:bgColor})
    setTextColor(textColor)
  }
  return (
    <>
      <h1 style={{ color: "red" }}>Inline style in the React JS</h1>
      <button onClick={()=>updateTheme('gray', 'pink')}>Gray Theme</button>
      <button onClick={()=> updateTheme('white', 'yellow')}>Default Theme</button>
      <button onClick={()=> setGrid(!grid)}>Toggle Grid</button>
      <div style={{display: grid?'flex': 'block' , flexWrap: "wrap", JustifyContent: 'center'}}>
        <div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div><div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div><div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div><div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div><div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div><div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div><div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div><div style={cardStyle}>
          <img
            style={{ width: "250px" }}
            src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          />
          <div
            style={{
              padding: "5px",
              color: textColor
            }}
          >
            <h1>Muqhtadeer</h1>
            <p>SDE</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;


function App() {
  return (
    <>
      <h1 className="heading">External Style</h1>
      <div className="container">
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div>
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div>
        <div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div><div className="user-card">
          <div>
            <img
              className="img-style"
              src="https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.jpg?s=612x612&w=0&k=20&c=obnaR5III0jRxHKd4ZPl3LRC2pI792KbHYR2eBzKKe8="
            />
          </div>
          <div className="text-wrap">
            <h4>Muqhtadeer</h4>
            <p>Software Dev</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;



// using modules 
import UserProfile from "./userProfile";
function App() {
  return (
    <>
      <h1>Style with CSS Modules in React</h1>
      <h1 >User Profile</h1>
      <div  style={{display: "flex", flexWrap: "wrap"}}>
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </>
  );
}

export default App;

// import styled from "styled-components"
// function App() {

  // const Heading = styled.h1`
  // color: red;
  // border: 1px solid green;
  // borderRadius: 5px;
  // margin: 20px;
  // padding: 20px
  // `
  // another method is given below to syle the component

  const Heading = styled. h1({
    color: 'red',
    border: '1px solid green',
    borderRadius: '5px',
    margin: '20px',
    padding: '20px'
  });

  const StyleBtn = styled.button `
  color:red;
  width:130px;
  height:40px;
  margin:20px;
  border:1px dotted black;
  border-radius: 10px;

  `
  return (
    <>
      <h1>Styled Component with Reactjs</h1>
      <Heading>Ghheno</Heading>
      <Heading>Godd ngjg</Heading>
      <Heading>Godd ngjg</Heading>
      <Heading>Godd ngjg</Heading>
      <StyleBtn>Login</StyleBtn>
      <StyleBtn>Sign up</StyleBtn>
      <StyleBtn>Register</StyleBtn>
      

    </>
  )
}
export default App;

*/