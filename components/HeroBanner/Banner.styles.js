import styled from "styled-components";

export const StyledBanner = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
`
export const BannerImage = styled.div `
   display: flex;
   width: 50%;
   justify-content:end;
`
export const BannerHeading = styled.div `
  
    h1{
        font-size: var(--font-size-xl);
        font-weight: 800;
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
width: 50%;
align-items: center;
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
`