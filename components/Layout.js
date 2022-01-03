import React from 'react'
import NavBar from "./Navbar"
import Footer from "./Footer"
import HeroBanner from './HeroBanner'
import Carousel from './Carousel'
import OurServices from './OurServices'
import { ServicesWrapper } from './OurServices/OurServices.styles'
const Layout = ({children}) => {
    return (
        <>
        <NavBar/>
        {children}
        <HeroBanner/>
        <Carousel/>
        <OurServices/>
        <ServicesWrapper/>
        {/* <Footer/> */}
        </>
        )
}

export default Layout


