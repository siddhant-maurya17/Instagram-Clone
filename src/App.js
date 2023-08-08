import React from "react";
import Signup from "./Components/Signup";
import {Routes,Route } from "react-router-dom";


const App=()=>{
    
  return (<div>
    <Routes>
           <Route path="/" element={<Signup/>}/>
    </Routes>
  </div>)

}

export default App;