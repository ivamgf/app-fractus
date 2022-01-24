import React, { useState } from "react";
import styled from "styled-components";

import HeaderInit from '../../../../lib/components/nav/headerInit'
import FooterInit from '../../../../lib/components/nav/footerInit'
import SimpleCard from '../../../../lib/mui/Cards/SimpleCard'

export default function Accept() {    

    return (
        <div>
            <HeaderInit />
            <Main>                                
                <SimpleCard value="Objeto de aprendizagem para ensino de frações." textLink="Termos" />
            </Main>            
            <FooterInit />
        </div>
    )
}

const Main = styled.div`
    margin: 2em 1em;
`
