import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

export default function TextCard(props: any) {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ minHeight: '20em' }}>
                    <Image
                        src="/favicon.ico"
                        alt="Logo Fractus"
                        width={25}
                        height={25}
                    />
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'center', marginTop: '4em' }}
                    >
                        {}
                    </Typography>
                </CardContent>
                <CardActions>
                  
                </CardActions>
            </Card>
        </>
    )
}
