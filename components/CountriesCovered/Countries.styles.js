import styled from "styled-components";

export const CountriesWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 44px;
    padding: 73px 0;
    flex-wrap: wrap;
`
export const CountryCard = styled.div `
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
`


export const CountryDetails = styled.div `
    max-width: 348px;
    display: flex;
    flex-direction: column;
    grid-gap: 14px;

    h3{
        color: #37474F;
        font-size: 24px;
        font-weight: 600;
    }
    p{
        color: #37474F;
    font-size: 15px;
    opacity: 73%;
    font-weight: 500;
    line-height: 22px;
    max-width: 276px;
    }
`