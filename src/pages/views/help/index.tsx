import React from "react";
import styled from "styled-components";

import Header from "../../../../lib/components/nav/header"
import FooterComponent from "../../../../lib/components/nav/footer";
import CardAccordion from "../../../../lib/mui/Cards/CardAccordion/CardAccordion";
import Breadcrumbs from '../../../../lib/mui/Breadcrumbs';

export default function Help() {

  const routes = {
    route1: 'Início',
    route2: 'Ajuda',
    route3: ''
  }

  return (
  <div>
    <Header />
    <Main>
      <Breadcrumbs routes={routes} />
      <CardAccordion />
    </Main>
    <FooterComponent />
  </div>
  );
}

const Main = styled.div`
  margin: 2em 1em;
`;
