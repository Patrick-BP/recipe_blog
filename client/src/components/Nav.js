import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header className="header">
        <div className="container">
            <nav className="navbar navbar-inverse navbar-toggleable-md">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#RecipeListmenu" aria-controls="RecipeListmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="RecipeListmenu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/layout">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/layout">Recipes</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Logout</Link>
                        </li>  
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Nav
