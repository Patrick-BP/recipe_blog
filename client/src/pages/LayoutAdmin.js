import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavAdmin from '../components/Admin/NavAdmin'

function LayoutAdmin() {
    return (
        <div id="wrapper " >
            
            <Header/>
            <NavAdmin/>
            <div className='mb-3'> 
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default LayoutAdmin
