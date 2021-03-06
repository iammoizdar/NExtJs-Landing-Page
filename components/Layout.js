import React from 'react'
import NavBar from "./Navbar"
import Footer from "./Footer"
import HeroBanner from './HeroBanner'
import Carousel from './Carousel'
import OurServices from './OurServices'
import { ServicesWrapper } from './OurServices/OurServices.styles'
import NewsSection from './NewsSection'
import UpcomingEvents from './UpcomingEvents'
import CountriesCovered from './CountriesCovered'
import Testimonials from './Testimonials'
const Layout = ({children}) => {
    return (
        <>
        <NavBar/>
        {children}
        <HeroBanner/>
        <Carousel/>
        <OurServices/>
        <ServicesWrapper/>
        <NewsSection/>
        <UpcomingEvents/>
        <CountriesCovered/>
        <Testimonials/>
        <Footer/>
        </>
        )
}

export default Layout


