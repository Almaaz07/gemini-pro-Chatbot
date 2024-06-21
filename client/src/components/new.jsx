import React, { useState } from 'react';
import axios from "axios";

const Best = () => {
    const [value , setValue] =useState("");
    const [response , setResponse] =useState([]);

const handleChange =(e)=>{
setValue(e.target.value)
// setValue("")
}

const handleClick = (e)=>{
  e.preventDefault();
  setResponse("loading...")
axios.post("http://localhost:8000/submit" , {value}).then((res)=>{
setResponse([...response, res.data]);
});
}
  return (
    <>
    <h1>Chat Bot</h1>
     <form>
      <h3>Ask Whatever You want</h3>
        <input type="text" onChange={(e)=>handleChange(e)}/>
       <button onClick={(e)=>handleClick(e)}>Generate</button>
        </form> 
       <div className='bg-gray-500 h-[300px] w-[500px]'>
        {response}
       </div>
       
    </>
  )
}

export default Best
