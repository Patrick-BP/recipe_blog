import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
axios.defaults.baseURL = 'http://localhost:8098/api/recipe'
function Nav() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
   
  
   

    const logoutFunc = ()=>{
        dispatch(logout())
        navigate("/")
    }

    
  
    return (
        <header className="header">
        <div className="container">
            <nav className="navbar navbar-inverse navbar-toggleable-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#RecipeListmenu" aria-controls="RecipeListmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="RecipeListmenu">
                <div className='d-flex justify-content-between w-100'>
                <ul className="navbar-nav  ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/layout">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="home">My Recipes</Link>
                        </li>
                       
                    </ul> 
                    <div className="d-flex gap-3">
                            <div className=" test-light d-flex" >
                            <button className="btn mr-4 text-light" onClick={logoutFunc} >Logout</button>
                            <span className='mr-3 ml-5' style={{fontSize:"15px", lineHeight:"29px", fontWeight:"bold"}}>{user.name.toUpperCase()}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"/></svg>
                            </div>
                    </div>  

                </div>
                   
                 
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Nav
