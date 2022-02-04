import React from 'react'
import styled from 'styled-components'

import HeaderInit from '../../../../lib/components/nav/headerInit'
import Header from '../../../../lib/components/nav/header'
import FooterComponent from '../../../../lib/components/nav/footer'
import CardAccordion from '../../../../lib/mui/Cards/CardAccordion'
import Breadcrumbs from '../../../../lib/mui/Breadcrumbs'
import Cookies from 'universal-cookie'

export default function Terms() {
    const cookies = new Cookies()
    const termState = cookies.get('termState')

    const routes = {
        route1: 'Início',
        route2: 'Termos',
        route3: '',
    }

    return (
        <div>
            {termState ? <Header /> : <HeaderInit />}
            <Main>
                {termState && <Breadcrumbs routes={routes} />}
                <CardAccordion textLink="Voltar" value="Termos" />
            </Main>
            <FooterComponent />
        </div>
    )
}

const Main = styled.div`
    margin: 2em 1em;
`
