import styled from "styled-components";

export const Button = styled.a `
  padding: 14px 30px 14px 32px;
  background-color: var(--secondary);
  color: #fff;
  border-radius: 10px;
  max-width: ${(props) => (props.large ? "324px" : "224px")};
  margin-top: -18px;
  cursor: pointer;
  display: flex;
  align-items:center;
  justify-content:space-between;
  transition: 0.3s ease;
  &:hover{
    background: #4b47cf;
    
  }

  
`