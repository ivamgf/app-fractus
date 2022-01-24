import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function BasicButtons(props: any) {
    return (
        <Stack style={{marginTop: "0.5em"}}>
            <Button variant="contained" disabled>{props.text}</Button>
        </Stack>
    )
}
