import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function AlertMessage() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Formulário enviado com sucesso!
    </Alert>
  );
}