import React from "react";
import styled from "styled-components";
import { Appear } from "@mdx-deck/components";

const StallmanQuote = () => (
  <BlockQuote>
    <p>
      <QuoteSymbol />
      People could no longer learn <Em>hacking</Em> the way I did ... In fact
      ... I often came across newly graduated computer science majors who had{" "}
      <Em>never seen a real program</Em> in their lives.
    </p>
    <p>
      They had only seen <Em>toy</Em> exercises ... because every <Em>real</Em>{" "}
      program was a <Em>trade secret</Em>.
    </p>
    <p>
      They never had the <Em>experience</Em> of writing <Em>features</Em> ...
      and fixing the <Em>bugs</Em> that real users came across.
    </p>
    <p>
      ...The things you <Em>need to know</Em> to do real work.
      <QuoteSymbol />
    </p>
    <Appear>
      <p style={{ color: "#DDA5DF" }}>- Richard Stallman</p>
    </Appear>
  </BlockQuote>
);

const BlockQuote = styled.blockquote`
  background: rgba(0, 0, 0, 0.2);
  font-family: Chelsea Market, san-serif;
  font-size: 2.4rem;
  letter-spacing: 2px;
  max-width: 1200px;
  padding: 2rem;
`;

const QuoteSymbol = styled.span`
  font-size: 3rem;
  &:before {
    content: '"';
  }
`;

const Em = styled.span`
  color: #b76eff;
`;

export default StallmanQuote;
