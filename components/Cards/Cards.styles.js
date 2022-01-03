import styled from "styled-components";

export const Card = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 344px;
    grid-gap:14px;
    box-shadow: 0px 0px 77px 0px rgba(0,0,0,6%);
    min-height: 424px;
    padding: 0 30px;
    h2{
        font-size: 24px;
        color: #37474F;
    }
    p{
        color: #37474F;
        opacity: 72.6%;
        font-size:15px;
        line-height: 24px;
        letter-spacing: 0.3px;
    }
    span{
        color: var(--secondary);
        font-size: 15px;
        font-weight: 600;
        display: flex;
        align-items:center;
    }
`

export const Icon = styled.div `
    display: flex;
    margin-bottom: 18px;
`
export const LearnMore = styled.div `
display: flex;
align-items:center;
`