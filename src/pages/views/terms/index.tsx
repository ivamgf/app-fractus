import React from "react";
import styled from "styled-components";

import HeaderInit from "../../../../lib/components/nav/headerInit";
import FooterComponent from "../../../../lib/components/nav/footer";
import CardAccordion from "../../../../lib/mui/Cards/CardAccordion";

export default function Terms() {
  return (
    <div>
      <HeaderInit />
      <Main>
        <CardAccordion textLink="Voltar" />
      </Main>
      <FooterComponent />
    </div>
  );
}

const Main = styled.div`
  margin: 2em 1em;
`;
