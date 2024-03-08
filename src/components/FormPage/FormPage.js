import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RadioButtonsGroup from '../RadioGroup/RadioGroup';
import Button from '../Button/Button';  


export default function BasicTextFields() {
  return (
    <>
    <h2>Faça seu cadastro</h2>
    <div className='container-form'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <TextField id="outlined-basic" label="E-mail" variant="outlined" />
      <RadioButtonsGroup/>
      <Button />
      
    </Box>
    </div>
    </>
  );
}