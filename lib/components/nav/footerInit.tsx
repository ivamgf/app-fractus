import React from "react";
import styled from "styled-components";

export default function FooterInitComponent() {
  return (
    <>
      <FooterInit />
    </>
  );
}

const FooterInit = styled.div`
  background-color: #249dd9;
  width: 100%;
  padding: 2em;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  height: 10em;
`;
