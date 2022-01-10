import styled from "styled-components";
export const StyledFooter = styled.footer `
  min-height: 350px;
  background-color: #717CFF;
  display: flex;
`;


export const LastSection = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  h2{
    font-size: 37px;
    color: #252525;
  }
`

export const ContentWrapper = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  .col-1,.col-2,.col-3{
    flex-direction: column;
    display: flex;
    grid-gap: 20px;
    list-style: none;
    color: #EEEEEE;
    font-size: 16px;
    line-height: 28px;
    li{
      cursor: pointer;
    }
    span{
      padding-top: 12px;
    }
 
  }
  .col-4{
    display: flex;
    flex-direction: column;
    min-height: 161px;
    justify-content: end;
     @media (max-width: 768px) {
    justify-content: center;
  }
  }
      @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
  }
`

export const FooterLogo = styled.div `
  display: inline-block;
`
export const SocialMedia = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 20px

 
`