import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#a507d6',
    },
  },
  typography: {
    fontFamily: ['PT Sans', 'sans-serif'].join(','),
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#fffbff',
        },
      },
    },
  },
})
