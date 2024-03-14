import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LayoutAdmin() {
    return (
        <div id="wrapper">
            <h1>Welcome Addmin</h1>
            <Header/>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default LayoutAdmin
