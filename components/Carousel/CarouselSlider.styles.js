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
    padding: 24px 0;
    h2{
        color: var(--secondary-text-color);
        font-size: 23px;
        font-weight: 500;
        opacity: 0.8;
        text-transform: uppercase;
    }
    .rec-carousel-wrapper{
        grid-gap: 60px;
        max-width:1440px; 
    }
    .rec.rec-pagination{
        gap:12px;
    }
.rec.rec-dot{
    background: #7C7C7C; opacity:0.6;
    width: 8px;
    height:8px;
}
.rec.rec-dot_active{
background: var(--secondary);opacity:1;
outline: none;
border:none;

box-shadow: none;
&:focus,:hover{
    box-shadow: 0 0 1px 3px rgb(113 124 255);
}
}
}
`