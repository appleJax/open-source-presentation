import React from "react";
import styled from "styled-components";

const Link = ({ to, children, ...props }) => (
  <StyledLink
    href={`https://${to}`}
    rel="noopener noreferrer"
    target="_blank"
    {...props}
  >
    {to}
  </StyledLink>
);

const StyledLink = styled.a`
  font-family: Monospace;
`;

export default Link;
