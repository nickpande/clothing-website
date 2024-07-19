import React from "react";
import Middler from "./Components/Middler";
import Data from "./data"
import { Route ,Routes} from 'react-router-dom'
import SignIn from "./Components/SignIn"
import SignUp from "./Components/SignUp"
import Navbar from "./Components/Navbar";
import Single from '../src/Components/SingleCard'
const App = () => {
  console.log(Data[0].image);
  return (
  <div>
  
  
    <Routes>
    <Route path='/' element ={<Middler  />}></Route>
    <Route path="/signup" element={<SignUp />  }/>
    <Route path="/signin" element={<SignIn />}/>
    <Route path="/Single" element={<Single />}/>
   </Routes>
   
    </div>
  )
};

export default App;
