import React from "react";
import styled from "styled-components";

import HeaderInit from '../../../../lib/components/nav/headerInit'
import FooterInit from '../../../../lib/components/nav/footerInit'
import SimpleCard from '../../../../lib/mui/Cards/SimpleCard'
import Button from '../../../../lib/mui/Buttons/BasicButton'

export default function Accept() {
    return (
        <div>
            <HeaderInit />
            <Main>                                
                <SimpleCard value="Objeto de aprendizagem para ensino de frações." textLink="Ler Termos" />
                <Button text="Avançar" />
            </Main>            
            <FooterInit />
        </div>
    )
}

const Main = styled.div`
    margin: 2em 1em;
`
