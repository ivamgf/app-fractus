import React from 'react'
import styled from 'styled-components'

import Header from '../../../lib/components/nav/header'
import FooterComponent from '../../../lib/components/nav/footer'
import Breadcrumbs from '../../../lib/mui/Breadcrumbs'
import contentText from '../../utils/jsons/contentText'
import TextCard from '../../../lib/mui/Cards/TextCard'

export default function Texts() {
    const content = contentText.content
    const routes = contentText.children.routes
    const buttons = contentText.children.buttons
    const texts = contentText.children.texts
    return (
      <div>
            <Header />
            <Main>
                <Breadcrumbs routes={routes} />
                <TextCard
                    content={content}
                    routes={routes}
                    buttons={buttons}
                    texts={texts}
                />
            </Main>
            <FooterComponent />
        </div>
    )
}

const Main = styled.div`
    margin: 2em 1em;
`
