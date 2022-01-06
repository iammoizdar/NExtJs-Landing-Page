import styled from "styled-components";

export const ServicesWrapper = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
    grid-gap: 50px;
    padding: 80px 0;
    `
export const ServicesHeading = styled.div `
text-align: center;
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