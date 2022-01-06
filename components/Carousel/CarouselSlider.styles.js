import styled from "styled-components";

export const Item = styled.div `
/* background: var(--primary); */
`

export const CarouselWrapper = styled.div `
    margin: 60px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 80px;
    flex-direction: column;
    background: #FAFAFA;
    padding: 45px 0;
    h2{
        color: var(--secondary-text-color);
        font-size: 23px;
        font-weight: 500;
        opacity: 0.8;
        text-transform: uppercase;
    }
   
}
`