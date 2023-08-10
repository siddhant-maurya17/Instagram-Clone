import React,{useEffect,useContext,useState} from "react";
import axios from "axios";
import Context from "../context/Context";

const Home=()=>{
    let {token,setToken}=useContext(Context);
    let [message,setMessage]=useState("");
    let [success,setSuccess]=useState("");
    let [error,setError]=useState("");

    console.log("Token",token); 
    useEffect(
        async()=>{
            try{
        let response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",{
            headers:{Authorization:`Bearer ${token}`}
        })
         setSuccess(response.data.message);
         setError("");
         setToken(response.data.data.token);
         setMessage(response.data.data.message)
         
        }
         catch(error){
            setMessage(error.response.data.message);
         }
    },[])

    return (
       <div>
           <button>Logout</button>
           <h1>Welcome, Siddhant!</h1>
           <p>Zuku has message for you:{message}</p>
       </div>
    )
}

export default Home;