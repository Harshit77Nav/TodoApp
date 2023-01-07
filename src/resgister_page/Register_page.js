import React, { useEffect, useState } from 'react'
import './register.css';
import {useNavigate,Link} from 'react-router-dom'


function Register_page() {

  const navigate = useNavigate();

  const [data , setData] = useState({
    UserName:"",
    Password:"",
  })

  const [confirmpass, setConfirmpass] = useState()

  const [error, setError] = useState();
  // console.log("err="+error);

  const handleSubmit = async () =>{
   if(data.Password == confirmpass){
     await fetch('http://localhost:5000/register',{
      method:"POST",
      body:JSON.stringify({
        UserName:data.UserName,
        Password:data.Password,
      }),
      headers:{"content-type":"application/json"}
    })
    .then((res)=>res.json())
    .then((data)=>setError(data))
    
   }else{
    alert("Password does'nt matched!")
   }
}
if(error !== undefined){
  if(error.status == "ok"){
    alert("Registration successful")
    navigate('/signIn')
  } else if(error.status == "Failed"){
    alert("username already exist,try new one")
    window.location.reload();
  }
    
  }

  return (
    <div className='res_body'>
        <div className='display'>
        <div className='register'>
            <h1 className='whiteBack'>Register</h1>

            <input className='white' type={'text'} placeholder='Username' onBlur={(e)=>setData({...data,UserName:e.target.value})}/>
            <input className='white' type={'password'} placeholder='Password' onBlur={(e)=>setData({...data,Password:e.target.value})}/>
            <input className='white' type={'password'} placeholder='Confirm password' onBlur={(e)=>setConfirmpass(e.target.value)}/>
            <button className='blue' onClick={handleSubmit} >Register</button>

            <Link to="/signIn"><button id='red' className='whiteBack'>Member Login</button></Link>
        </div>
        </div>
    </div>
  )
}

export default Register_page