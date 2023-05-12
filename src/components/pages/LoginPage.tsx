import { TextField } from '@mui/material';
import React, { useState } from 'react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return <TextField id='outlined-basic' label='Outlined' variant='outlined' />;
};
