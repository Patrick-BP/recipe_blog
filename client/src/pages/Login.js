import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {useDispatch, useSelector} from 'react-redux'
import { signInUser } from "../redux/authSlice";


function Login() {
  const [input, setInput] = useState({
    email: "admin@gmail.com",
    password: "password",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
const [userInfo, setUserInfo] = useState({})
  const user = useSelector(state=>state.user)

  const handleChanges = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  

  const onSubmit = async (e) => {
    e.preventDefault();
   dispatch(signInUser({email:input.email, password:input.password}))
   .then(res=>{
   
    if(res.payload.user ===null){
  toast.error("Incorrect email/password", { position: "top-center",autoClose: 3000, onClose:()=>{setInput({email: "", password: "",})}});

}else{
 
   toast.success("You are logged in", {
    position: "top-center",
    autoClose: 1000,
    onClose: () => {
      if(res.payload.user.roles[0].authority.includes("USER")){
        navigate("/layout");
      }else if(res.payload.user.roles[0].authority.includes("ADMIN")){
        navigate("/admin");
      } 
    },
  });
}
   })

  
  }
 
  return (
    <div className="container">
      <div className="wrapper">
        <form name="Login_Form" className="form-signin" onSubmit={onSubmit}>
          <h3 className="form-signin-heading">Welcome Back! Please Sign In</h3>
          <hr className="colorgraph" />
          <br />

          <input
            type="email"
            className="form-control"
            name="email"
            value={input.email}
            placeholder="email"
            onChange={handleChanges}
            required
            
          />
          <input
            type="password"
            className="form-control"
            name="password"
            value={input.password}
            placeholder="Password"
            onChange={handleChanges}
            required
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            name="Submit"
            value="Login"
            type="Submit"
          >
            Login
          </button>

          <p>
            <Link to="/register">Create an Account</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
