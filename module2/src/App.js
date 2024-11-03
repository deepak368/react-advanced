////creaatin g a custom hoook////
import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef()
  useEffect(() =>{
    ref.current = val;
  },[val])
  return ref.current
}





///usage of useRef hook ////

// import React from 'react'
// import { useRef } from 'react'

// const App = () => {
//   const formInputRef = useRef(null)
//   const focusInput = () =>{
//      formInputRef.current.focus();
//   }
//   return (
//     <>
//     <h1>using useRef to acess underlying dom</h1>
//     <input ref={formInputRef  } type='text'/>
//     <button onClick={focusInput}>
//       Focus Input
//     </button>
//     </>
//   )
// }

// export default App





/////////useEffect hook and how it works///////

// import React, { useEffect } from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [toggle,setToggle] = useState(false)

//   const clickHandler = () => {
//     setToggle(!toggle)
//   }
//   useEffect(() => {
//     document.title = toggle ? "welcome to little lemon" : "using the useeffect hook"
//   },[toggle]);
//   return (
//     <div>
//       <h1>Using the useEffect hook</h1>
//       <button onClick={clickHandler}>Toggle message</button>
//       {toggle && <h2>welcome to tittle lemon</h2>}
//     </div>
//   )
// }

// export default App










// ///use state hook and spred operator////
// ///#################################///

// // import { useState } from "react";

// // import React from 'react'

// // function GoalForm(props){
// //   const [formData,setFormData] = useState({goal:"", by:""});

// //   function changeHandler(e){
// //     setFormData({...formData,[e.target.name]: e.target.value})
// //   }
// //   function submitHandler(e){
// //     e.preventDefault();
// //     props.onAdd(formData);
// //     setFormData({goal:"",by:""})
// //   }
// //   return (
// //     <>
// //     <h1>My littile lemmon goals</h1>
// //     <form onSubmit={submitHandler}>
// //       <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
// //       <input type="text" name="by" placeholder="by" value={formData.by} onChange={changeHandler}/>
// //       <button>submit Goal</button>
// //     </form>
// //     </>
// //   )
// // }

// // function ListOfGoals(props){
// //   return(
// //     <ul>
// //       {props.allGoals.map((g) => (
// //         <li key={g.goal}>
// //           <span>my goal is to {g.goal}, by{g.by}</span>
// //         </li>
// //       ))}
// //     </ul>
// //   )
// // }
// // const App = () => {
// //   const [allGoals, updateAllGoals] = useState([]);

// //   function addGoal(goal) {updateAllGoals([...allGoals, goal])}
// //   return(
// //     <div className="App">
// //       <GoalForm onAdd={addGoal}/>
// //       <ListOfGoals allGoals={allGoals}/>
// //     </div>
// //   )
// // }

// // export default App