import React from 'react'
import Button from '@mui/material/Button';
import './Login.css';
import{Link} from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
export default function Login() {
const userRef=useRef()
const passwordRef=useRef()
const{dispatch,isFetching}=useContext(Context)
  const handleSubmit=async(e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
const res=await axios.post("/auth/login",{
    username:userRef.current.value,
    password:passwordRef.current.value,
})
dispatch({type:"LOGIN_SUCCESS",payload:res.data});

    }
    catch(err){
        dispatch({type:"LOGIN_FAILURE"});
    }
  };
  //console.log(isFetching)
    return (
    <div className='login'>  
<form className='loginform' onSubmit={handleSubmit} >
<h1>Login</h1>

<input label="username"  type="text" required ref={userRef} placeholder="username"/>
<br/>
<input label="password" type="password" required ref={passwordRef} placeholder="password"/>
<br/>
<Button variant="outlined" type="submit" disabled={isFetching}> Login</Button>
</form>
<button className="registerLoginButton">
  <Link className="link" to='/register'>Register</Link></button>
    
       </div>
  )
}

//login button:disabled cursor:not-allowed;