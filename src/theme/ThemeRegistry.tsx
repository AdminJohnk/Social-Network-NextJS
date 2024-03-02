'use client';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { blueGrey, lightBlue, lightGreen, red } from '@mui/material/colors';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: lightBlue[200]
    },
    secondary: {
      main: lightGreen[200]
    },
    error: {
      main: red.A400
    },
    background: {
      default: blueGrey.A100
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
