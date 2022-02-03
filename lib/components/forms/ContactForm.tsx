import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MultiLineText from '../../mui/TextField/MultText'

export default function ContactForm() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Nome:" variant="standard" />
      <TextField label="E-mail:" variant="standard" type="email" />
      <TextField label="Assunto:" variant="standard" />
      <MultiLineText />
    </Box>
  );
}
