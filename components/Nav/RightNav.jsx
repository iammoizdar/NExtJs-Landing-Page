import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { StyledLink } from '../Navbar/Navbar.styles';
import { CTA } from '../Navbar/Navbar.styles';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--secondary);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    z-index: 1;
    align-items: center;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
                    <Link href="/" passHref>
                    <CTA>Apply</CTA>
                    </Link>
                </li>
    </Ul>
  )
}

export default RightNav
