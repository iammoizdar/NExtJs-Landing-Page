import styled from "styled-components";

export const StyledBanner = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
`
export const BannerImage = styled.div `
   display: flex;
   width: 40%;
   justify-content:end;
    @media (max-width: 1024px) {
    display: none;
  }
`
export const BannerHeading = styled.div `
  
    h1{
        font-size: var(--font-size-xl);
        font-weight: 800;
         @media (max-width: 468px) {
    font-size: 3rem;
  }
    }
    p{
        font-size: var(--font-size-p);
        color: var(--primary-text-color);
    }
`
export const BannerWrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
width: 60%;
align-items: center;
@media (max-width: 1024px) {
    width: 100%;
  }
`
export const Headingwrapper = styled.div `
 grid-gap: 30px;
 display: flex;
 flex-direction: column;
 span{
   color: var(--secondary);
 }
 .icons{
   display: flex;
   align-items:center;
  gap:14px;

 }
 @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`