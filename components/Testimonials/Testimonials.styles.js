import styled from "styled-components";

export const TestimonialsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    grid-gap: 54px;
    .TestCardHolder{
        display: flex;
        justify-content: center;
    align-items: center;
    gap: 54px;
    max-width: 1440px;
    }
`
export const TestCard = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 503px;
    grid-gap: 24px;
    p{
    max-width: 358px;   
    color: #37474F;
    font-size: 15px;
    opacity: 73%;
    font-weight: 400;
    line-height: 24px;
    }
`
export const Toptitle = styled.div `
    display: flex;
    align-items: center;
    grid-gap: 16px;

    span{
        font-size: 15px;
        color: #37474F;
        font-weight: 500;
        opacity: 64%;
    }
    h4{
        font-size: 20px;
        color: #37474F;
        font-weight: 600;

    }

`
export const UserIcon = styled.div `
    display: inline-block;
`