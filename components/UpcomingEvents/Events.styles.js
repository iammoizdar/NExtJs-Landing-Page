import styled from "styled-components";

export const EventsWrapper = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    grid-gap: 50px;
    padding: 80px 0;
    background: #fff;
`

export const TopHeading = styled.div `
text-align: center;
width: 949px;
    margin: auto;
h3{
    color: var(--secondary-text-color);
    font-size: 37px;
    padding-bottom: 12px;
}
p {
    text-align:center;
    font-size:20px;
    color: var(--primary-text-color);
    line-height: 35px;
}

`

export const CardElement = styled.div `
    display: flex;
    flex-direction: column;
    width: 540px;
    min-height: 308px;
    grid-gap: 14px;

    p{
        color: #37474F;
        font-size: 15px;
        opacity: 73%;
        font-weight: 500;
        line-height: 24px;
    }
`

export const Head = styled.div `
    display: flex;
    gap: 24px;
    align-items: center;

`

export const IconPic = styled.div `
    display: inline-block;

`
export const Title = styled.div `
    max-width: 273px;
    font-size: 24px;
    color: #37474F;
    font-weight: 700;
`
export const LastInfo = styled.div `
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;

    .date{
        color: #373737;
        font-weight: 600;
    }
`
export const EventCardHolder = styled.div `
   display: flex;
   justify-content: space-evenly;
   padding-top: 73px;
`