import React from "react";
import styled from "styled-components";

import Header from "../../../../lib/components/nav/header"
import FooterComponent from "../../../../lib/components/nav/footer";
import Breadcrumbs from '../../../../lib/mui/Breadcrumbs';
import CardForm from '../../../../lib/mui/Cards/CardForm'

export default function Contact() {
  return (
    <div>
    <Header />
    <Main>
      
      <CardForm />
    </Main>
    <FooterComponent />
  </div>
  );
}

const Main = styled.div`
  margin: 2em 1em;
`;
