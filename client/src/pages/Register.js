import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// axios.defaults.baseURL = 'http://localhost:8098/api'

function Register() {

const [input, setInput] = useState({name:"", email:"", password:""});
const navigate = useNavigate();

const handleSubmit =async(event)=>{
    event.preventDefault()
    if (!event.target.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }else{
        try {
            const response = await axios.post("http://localhost:8098/api/auth/register", input)
        
            toast.success(response.data,{
                     position: "top-center",
                     autoClose: 1000,
                     onClose: () => {
                       navigate("/");
                     },
                 });
             
             
             }catch(error){
                 toast.error(error.response.data,{
                             position: "top-center",
                             autoClose: 3000,
                 });
             }
      }

      event.target.classList.add('was-validated')

}
const handleChanges = (e)=>{
    setInput(prev=> ({...prev,[e.target.name]:e.target.value}))
}

    return (
        <div className = "container">
        <div className="wrapper">
  <form  name="Login_Form" className="form-signin" onSubmit={handleSubmit} noValidate>       
    <h3 className="form-signin-heading">Please Sign Up</h3>
    <hr className="colorgraph"/><br/>
    
    <div>
        <input type="text" className="form-control" value={input.name} name="name" onChange={(e)=>handleChanges(e)} placeholder="Full Name" required/>   
        <div className="valid-feedback">
            Looks good!
        </div>
        <div className="invalid-feedback">
            Must provide a Full Name
        </div>
    </div>       
    <div>
        <input type="email" className="form-control" value={input.email} name="email" onChange={(e)=>handleChanges(e)} placeholder="Email" required />
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Must provide a valid Email
            </div>
    </div>
    <div>
        <input type="password" className="form-control" value={input.password} name="password" onChange={(e)=>handleChanges(e)} placeholder="Password" required/>   
            <div className="valid-feedback mb-5">
                Looks good!
            </div>
            <div className="invalid-feedback mb-5">
                Must provide a password
            </div>
    </div>       
   
    <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="submit">Register</button> 

    <p ><Link  to="/" className="btn btn-lg btn-primary btn-block mt-4">Login</Link></p>      
</form> 
    <ToastContainer />

</div>
</div>
    )
}

export default Register
