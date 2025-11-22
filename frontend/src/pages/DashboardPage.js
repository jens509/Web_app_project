import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h1">Tableau de bord</Typography>
      {/* place-holder widgets ou statistiques */}
      <Box mt={2}>
        <Typography variant="body1">Bienvenue sur votre interface d'administration.</Typography>
      </Box>
    </Box>
  );
};
export default DashboardPage;
