import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SimpleAccordion(props: any) {
    
    const fields = props

    return (
        <>
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text1}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title2}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text2}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title3}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text3}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title4}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text4}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title5}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text5}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title6}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text6}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title7}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text7}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title8}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text8}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    style={{backgroundColor: '#249DD9', color: '#fff'}}
                >
                    <Typography>{fields.title9}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fields.text9}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        </>
        
    )
}
