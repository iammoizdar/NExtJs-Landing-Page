import React from 'react'
import { StyledNavBar } from './Navbar.styles'
import SiteLogo from "../../assets/images/Logo.png"
import { Logo } from './Navbar.styles'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarWrapper } from './Navbar.styles'
import { CTA } from './Navbar.styles'
import { StyledLink } from './Navbar.styles'
import Burger from '../Nav/Burger'
import Modal from '../Atoms/Modal'
const Navbar = () => {
return (
<StyledNavBar>
    <div className="container">
        <NavbarWrapper>
            <Logo>
                <Image src={SiteLogo} alt="" />
            </Logo>
            <ul className='nav'>
                <li>
                    <Link href="/"passHref>
                    <StyledLink>Home</StyledLink>
                    </Link>
                </li>
                <li>
                    <Link href="/about"passHref>
                    <StyledLink>About Us</StyledLink>
                    </Link>
                </li>
                <li>
                    <Link href="/"passHref>
                    <StyledLink>Our Services</StyledLink>
                    </Link>
                </li>
                <li>
                    <Link href="/"passHref>
                    <StyledLink>Responsibilities</StyledLink>
                    </Link>
                </li>
                <li>
                    <Link href="/"passHref>
                    <StyledLink>Country</StyledLink>
                    </Link>
                </li>
                <li>
              
                    <Modal/>
              
                </li>
            </ul>
                <div className="hamburger-menu">
                <Burger/>
              
                </div>
        </NavbarWrapper>
    </div>
</StyledNavBar>
)
}

export default Navbar