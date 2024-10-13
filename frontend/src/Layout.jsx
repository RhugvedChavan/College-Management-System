import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
        <header className='bg-violet-50'>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout