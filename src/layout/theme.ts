import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: blueGrey[100],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h5: {
          fontWeight: 700,
        },
      },
    },
  },
});
