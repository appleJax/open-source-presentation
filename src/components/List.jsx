import React from "react";
import styled from "styled-components";

const List = ({ children }) => (
  <Ul>
    {children.map(child => (
      <li>{child}</li>
    ))}
  </Ul>
);

const Ul = styled.ul`
  max-width: 1600px;
`;

export default List;
