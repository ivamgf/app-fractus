import React from 'react'
import styled from 'styled-components'

import Header from '../../../../lib/components/nav/header'
import BasicCard from '../../../../lib/mui/Cards/BasicCard'
import Breadcrumbs from '../../../../lib/mui/Breadcrumbs'
import FooterComponent from '../../../../lib/components/nav/footer'
import contentCards from '../../../utils/jsons/contentsCards'

export default function About() {
    const routes = contentCards.children.routes
    const textCard = contentCards.content
    const buttons = contentCards.children.buttons

    return (
        <>
            <Header />
            <Main>
                <Breadcrumbs routes={routes} />
                <BasicCard value={textCard} routes={routes} buttons={buttons} />
            </Main>
            <FooterComponent />
        </>
    )
}

const Main = styled.div`
    margin: 2em 1em;
`
