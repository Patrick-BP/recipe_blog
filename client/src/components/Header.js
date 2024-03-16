import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section id="cta" className="jumbotron text-center">
        <div className="container">
            {/* <a href="#"><img src="assets/images/version/food-logo.png" alt="" className="img-fluid"/></a> */}
            {/* <p>Each year we've hosted the Best Food Blog Awards, we're astounded at the depth, variety, creativity, and ingenuity of the food blogs nominated..</p> */}
            <Link to="#" className="btn btn-primary">View Recipes</Link>
        </div>
    </section>
    )
}

export default Header
