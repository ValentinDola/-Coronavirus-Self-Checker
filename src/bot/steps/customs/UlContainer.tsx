import React from "react";
import styled from "styled-components";

export const UL = styled.ul`
    font-size: .8rem;
`;

interface IUlContainerProps {
  items: string[]
}

const UlContainer = ({items}: IUlContainerProps): any => {
  return (
    <UL>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </UL>
  );
};

export default UlContainer;