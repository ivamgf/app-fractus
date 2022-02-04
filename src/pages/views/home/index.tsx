import React from 'react'
import styled from 'styled-components'

import Header from '../../../../lib/components/nav/header'
import Card from '../../../../lib/mui/Cards/Card'
import Breadcrumbs from '../../../../lib/mui/Breadcrumbs'
import FooterComponent from '../../../../lib/components/nav/footer'

export default function Home() {
    const textCard = 'Objeto de aprendizagem para ensino de frações.'
    const routes = {
        route1: '',
        route2: '',
        route3: 'Início',
    }

    return (
        <>
            <Header />
            <Main>
                <Breadcrumbs routes={routes} />
                <Card value={textCard} />
            </Main>
            <FooterComponent />
        </>
    )
}

const Main = styled.div`
    margin: 2em 1em;
`
