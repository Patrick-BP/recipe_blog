import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8098/api'

function Login() {
  const[input, setInput]=useState({email:"", password:""});
  const handleChanges = (event)=>{
      setInput(prev=> ({...prev, [event.target.name]:event.target.value}))
  }
const navigate = useNavigate();
  const onSubmit = async (e)=>{
    e.preventDefault();
   await axios.post('/auth/login', input)
    .then(res=>{
      if(res.data.user){

        toast.success('You are logged in');
        // navigate("/layout")
      }else{
        toast.error('Incorrect email/password')
      }
    }).catch(error=>{
      toast.error('Something went wrong');
    })
    
  }
    return (
        
         <div className = "container">
            <div className="wrapper">
      <form  name="Login_Form" className="form-signin" onSubmit={onSubmit}>       
        <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
        <hr className="colorgraph"/><br/>
        
        <input type="email" className="form-control" name="email" placeholder="email" onChange={handleChanges} required="" autoFocus="" />
        <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChanges}  required=""/>          
       
        <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Login</button>  

        <p><Link to="/register">Create an Account</Link></p>      
    </form>     
    <ToastContainer />
  </div>
</div>
       
    )
}

export default Login
