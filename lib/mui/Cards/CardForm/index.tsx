import React from 'react'
import { useRouter } from 'next/router'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Image from 'next/image'

import ContactForm from '../../../components/forms/ContactForm'
import SuccessAlert from '../../../components/alerts/SuccessAlert'
import { useState } from 'react'

export default function CardForm(props: IContact) {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const content = props.content
    const buttonPrev = props.buttonPrev
    const buttonSend = props.buttonSend

    const redirectHome = async () => await router.push('/views/home/')
    const redirectSend = async () =>
        setTimeout(() => {
            router.push('/views/home/')
        }, 5000)
    const handleSubmit = () => {
        setOpen(true)
        redirectSend()
    }

    return (
        <>
            <Collapse in={open}>
                <SuccessAlert />
            </Collapse>

            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ minHeight: '20em' }}>
                    <Typography variant="body2" style={{ textAlign: 'center' }}>
                        <Image
                            src="/favicon.ico"
                            alt="Logo Fractus"
                            width={25}
                            height={25}
                        />
                        <span style={{ fontSize: '2em', marginLeft: '0.3em' }}>
                            {content.title}
                        </span>
                    </Typography>
                    <ContactForm />
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        size="small"
                        style={{ backgroundColor: '#249DD9' }}
                        onClick={redirectHome}
                    >
                        {buttonPrev.value}
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        style={{
                            backgroundColor: '#249DD9',
                            position: 'absolute',
                            right: '2em',
                        }}
                        onClick={handleSubmit}
                    >
                        {buttonSend.value}
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
