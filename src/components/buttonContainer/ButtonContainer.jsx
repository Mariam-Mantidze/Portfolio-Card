import styled from "styled-components";
import React from "react";

export default function ButtonContainer({ children }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  background-color: hsl(0, 0%, 20%);
  border: none;
  border-radius: 5px;
  padding: 10px;

  color: hsl(0, 0%, 100%);

  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  font-family: "Inter", sans-serif;

  &:hover {
    color: hsl(0, 0%, 12%);
    background-color: hsl(75, 94%, 57%);
  }
`;
