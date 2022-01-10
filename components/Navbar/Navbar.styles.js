import styled from "styled-components";

export const StyledNavBar = styled.div `
  width: 100%;
`;
export const Logo = styled.div `
  display: flex;
`;
export const NavbarWrapper = styled.div `
  display: flex;

  .nav{
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: end;
    align-items: center;
    gap: 68px;
    li{
      color: var(--text-color-brown);
      font-weight: 500;
    }
     @media (max-width: 768px) {
    display: none;
  }
   @media (max-width: 1100px) {
    gap: 30px;
  }
   @media (max-width: 900px) {
    gap: 16px;
  }
  }
  .hamburger-menu{
    display: none;
    @media (max-width: 768px) {
    display: block;
  }
  }
`;

export const CTA = styled.a `
  border: 1px solid var(--secondary);
  padding: 8px 24px;
  border-radius: 10px;
  color: var(--text-color-brown);
  font-weight: 500;
  transition: 0.3s ease;
  &:hover{
    background: var(--secondary);
    color: #fff
  }
    @media (max-width: 768px) {
    color: #fff;
    background: #000;
  }

`
export const StyledLink = styled.a `
  border-bottom: transparent;
  padding-bottom: 5px;
  
  
  &:hover{
    border-bottom: 2px solid var(--secondary);
    transition: 0.3s ease;
  }
`