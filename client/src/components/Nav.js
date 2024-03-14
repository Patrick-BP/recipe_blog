import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem('user'))

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
                            <Link className="nav-link" to="/layout">Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add a Recipe</Link>
                        
                        </li>
                    </ul> 
                    <div className="d-flex gap-3">
                            <div className=" test-light d-flex" >
                            <button className="btn mr-4" onClick={logoutFunc} >Logout</button>
                            <span className='ml-5' style={{fontSize:"15px", lineHeight:"33px", fontWeight:"bolder"}}>{user.name.toUpperCase()}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-2.5 13.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9M12 12.25A2.25 2.25 0 0 0 14.25 10A2.25 2.25 0 0 0 12 7.75A2.25 2.25 0 0 0 9.75 10A2.25 2.25 0 0 0 12 12.25"/></svg>
                            </div>
                    </div>  

                </div>
                   
                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
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
