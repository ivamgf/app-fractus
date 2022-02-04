import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function MultilineTextFields() {
    
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 0, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="standard-textarea"
                label="Mensagem:"
                placeholder="Digite sua Mensagem"
                multiline
                variant="standard"
            />
        </Box>
    )
}
