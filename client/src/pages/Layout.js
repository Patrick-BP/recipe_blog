import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout() {
    return (
        <div id="wrapper">
            <Header/>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout
