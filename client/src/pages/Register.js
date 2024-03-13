import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.baseURL = 'http://localhost:8098/api'

function Register() {

const [input, setInput] = useState({name:"test", email:"test@gmail.com", password:"123"});
const navigate = useNavigate();

const handleSubmit =async(event)=>{
    event.preventDefault()
    try {
    await axios.post("/auth/register",input)
    .then(res=>{
        toast.success('Account created');
        setTimeout(()=>navigate("/"), 4000)
    }).catch(err=>{
        console.log(err);
    })
    
    setInput({name:"", email:"", password:""});
    }catch(error){
        toast.error('Something went wrong');
    }
}
const handleChanges = (e)=>{
    setInput(prev=> ({...prev,[e.target.name]:e.target.value}))
}

    return (
        <div className = "container">
        <div className="wrapper">
  <form  name="Login_Form" className="form-signin" onSubmit={handleSubmit}>       
    <h3 className="form-signin-heading">Please Sign Up</h3>
    <hr className="colorgraph"/><br/>
    <input type="text" className="form-control" value={input.name} name="name" onChange={(e)=>handleChanges(e)} placeholder="Full Name" required=""/>          
    <input type="email" className="form-control" value={input.email} name="email" onChange={(e)=>handleChanges(e)} placeholder="Email" required="" autoFocus="" />
    <input type="password" className="form-control" value={input.password} name="Password" onChange={(e)=>handleChanges(e)} placeholder="Password" required=""/>          
   
    <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="Submit">Register</button> 

    <p ><Link to="/">Login</Link></p>      
</form> 
    <ToastContainer />

</div>
</div>
    )
}

export default Register
