import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;




// import './App.css';


// const Button = ({children, backgroundColor}) =>{
//   return <button style={{backgroundColor}}>{children}</button>
// };

// const Alert = ({children}) => {
//   return(
//     <>
//     <div className='Overlay'></div>
//     <div className='Alert'>{children}</div>
//     </>
//   )
// }
//  const DeleteButton = () => {
//   return <Button backgroundColor="red">Delete</Button>
//  }
// function App() {
//   return (
//     <div className='App'>
//       <header>Little lemon restaurant</header>
//       <Alert>
//         <h4>Delete account</h4>
//         <p>are you sure you want to delete account</p>
//         <DeleteButton/>
//       </Alert>
//     </div>
//   );
// }

// export default App;
