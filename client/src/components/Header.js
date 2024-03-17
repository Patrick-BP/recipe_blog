import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section id="cta" className="jumbotron text-center" >
        <div className="container" style={{maxWidth: "69rem"}}>
        <div className=' text-light fw-bold' style={{fontSize:"5em",lineHeight: "83px"}}>Foodie Crush</div>
            
            <p>Each year we've hosted the Best Food Blog Awards, we're astounded at the depth, variety, creativity, and ingenuity of the food blogs nominated..</p>
        </div>
    </section>
    )
}

export default Header
