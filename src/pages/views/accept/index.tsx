import styled from "styled-components";

import HeaderInit from "../../../../lib/components/nav/headerInit";
import FooterInit from "../../../../lib/components/nav/footerInit";
import SimpleCard from "../../../../lib/mui/Cards/SimpleCard";
import ModelTrans from "../../../../lib/mui/Models/ModelTrans";

export default function Accept() {
  return (
    <div>
      <HeaderInit />
      <Main>
        <SimpleCard
          value="Objeto de aprendizagem para ensino de frações."
          textLink="Termos"
        />
        <ModelTrans />
      </Main>
      <FooterInit />
    </div>
  );
}

const Main = styled.div`
  margin: 2em 1em;
`;
