import { createTheme } from '@mui/material/styles';
import { frFR } from '@mui/material/locale';

const theme = createTheme({
  palette: {
    primary: { main: '#1565c0' }, // bleu foncé
    secondary: { main: '#2e7d32' }, // vert
    background: { default: '#f4f6fa' },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 13,
    h1: { fontSize: 28, fontWeight: 700 },
    h2: { fontSize: 22, fontWeight: 600 },
    h3: { fontSize: 18, fontWeight: 600 },
    body1: { fontSize: 14 },
    body2: { fontSize: 12 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#1565c0',
          color: '#fff',
        },
      },
    },
  },
}, frFR);

export default theme;
