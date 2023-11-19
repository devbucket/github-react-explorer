import { type PropsWithChildren } from 'react';
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { theme } from '@/layout/theme';

/**
 * Applies the global styles and theme to the application.
 */
export function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          '#root': {
            padding: theme.spacing(3),
          },
        }}
      />
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
