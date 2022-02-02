import React from "react";
import styled from "styled-components";

import Header from "../../../../lib/components/nav/header"
import FooterComponent from "../../../../lib/components/nav/footer";
import CardAccordion from "../../../../lib/mui/Cards/CardAccordion/CardAccordion";
import Breadcrumbs from '../../../../lib/mui/Breadcrumbs';
import contentHelp from "../../../../src/utils/contentHelp";

export default function Help() {

  const help = contentHelp.help
  const contentCard =  contentHelp.content
  const buttons = contentHelp.children.buttons
  const routes = contentHelp.children.routes
  
  return (
  <div>
    <Header />
    <Main>
      <Breadcrumbs routes={routes} />
      <CardAccordion contentCard={contentCard} buttonsProps={buttons} routes={routes} help={help} />
    </Main>
    <FooterComponent />
  </div>
  );
}

const Main = styled.div`
  margin: 2em 1em;
`;
