import React, { useState } from 'react';
import { Avatar, Button, TextField, Box, Typography, Paper } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // todo : intégration backend
  };

  return (
    <Box height="100vh" display="flex" alignItems="center" justifyContent="center" bgcolor="#f4f6fa">
      <Paper elevation={3} sx={{ p: 4, minWidth: 330, maxWidth: 390 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" mb={2} fontWeight={600}>
            Connexion
          </Typography>
          <Box component="form" width="100%" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" color="primary" variant="contained" fullWidth sx={{ mt: 2, py: 1.2, fontWeight: 700 }}>
              Se connecter
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
export default LoginPage;
