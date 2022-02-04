import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function MultilineTextFields() {

    return (
      <TextField
          id="standard-textarea"
          label="Mensagem:"
          placeholder="Digite sua Mensagem"
          multiline
          variant="standard"
      />
    )
}
