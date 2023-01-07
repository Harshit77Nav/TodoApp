import React, { useState } from 'react'
import './signIn.css';
import {useNavigate} from 'react-router-dom'

function SignInpage() {
  const navigate = useNavigate();

  const [data , setData] = useState({
    UserName:"",
    Password:"",
  })

  const [error, setError] = useState();

  const handleSubmit = async () => {
      await fetch('http://localhost:5000/login',{
      method:"POST",
      body:JSON.stringify({
        UserName:data.UserName,
        Password:data.Password,
      }),
      headers:{"content-type":"application/json"}
    })
    .then((res)=>res.json())
    .then((data)=>setError(data))
  }
  if(error !== undefined){
      if(error.status == "ok"){
        alert("login successful")
        localStorage.setItem("userData",error);
        navigate('/home')
      }
  }

  return (
    <div >
         <div className='display'>
        <div className='register'>
            <h1 className='whiteBack'>Member Login</h1>
            <input className='white' type={'text'} placeholder='Username' onBlur={(e)=>setData({...data,UserName:e.target.value})} />
            <input className='white' type={'password'} placeholder='Password' onBlur={(e)=>setData({...data,Password:e.target.value})} />
            <button className='blue' onClick={handleSubmit}>Login</button>
            <p id='red' className='whiteBack'>Forgot password</p>
        </div>
        </div>
    </div>
  )
}

export default SignInpage