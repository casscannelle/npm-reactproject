import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Já tem gatos?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="sim"
        name="radio-buttons-group"
      >
        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
        <FormControlLabel value="nao" control={<Radio />} label="Não" />
        
      </RadioGroup>
    </FormControl>
  );
}
