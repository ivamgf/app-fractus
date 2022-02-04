import React from 'react'
import styled from 'styled-components'

import Header from '../../../../lib/components/nav/header'
import FooterComponent from '../../../../lib/components/nav/footer'
import Breadcrumbs from '../../../../lib/mui/Breadcrumbs'
import CardForm from '../../../../lib/mui/Cards/CardForm'
import contentContact from '../../../utils/jsons/contentContact'

export default function Contact() {
    const content = contentContact.content
    const routes = contentContact.children.routes
    const buttons = contentContact.children.buttons
    const buttonPrev = buttons.buttonPrev
    const buttonSend = buttons.buttonSend

    return (
        <div>
            <Header />
            <Main>
                <Breadcrumbs routes={routes} />
                <CardForm
                    content={content}
                    routes={routes}
                    buttonPrev={buttonPrev}
                    buttonSend={buttonSend}
                />
            </Main>
            <FooterComponent />
        </div>
    )
}

const Main = styled.div`
    margin: 2em 1em;
`
