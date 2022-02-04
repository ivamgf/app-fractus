import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type THelp = {
    title1?: string
    text1?: string
    title2?: string
    text2?: string
    title3?: string
    text3?: string
    title4?: string
    text4?: string
    title5?: string
    text5?: string
    title6?: string
    text6?: string
    title7?: string
    text7?: string
}

export default function SimpleAccordion(props: THelp) {
    const content = props

    return (
        <>
            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{content.title1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content.text1}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{content.title2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content.text2}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{content.title3}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content.text3}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{content.title4}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content.text4}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{content.title5}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content.text5}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{content.title6}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content.text6}</Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        style={{ backgroundColor: '#249DD9', color: '#fff' }}
                    >
                        <Typography>{content.title7}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content.text7}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
