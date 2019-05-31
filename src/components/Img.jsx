import React from "react";
import styled from "styled-components";

const Img = props => <Image {...props} />;

const Image = styled.img`
  border-radius: 5px;
  height: 60px;
  margin-left: 15px;
`;

export default Img;
