import { Box, Typography } from '@mui/material';

/**
 * Renders the main application header
 */
export function Header() {
  return (
    <Box component="header" role="banner" sx={{ textAlign: 'center', mb: 4 }}>
      <Typography component="h1" variant="h5" data-testid="page-header">
        GitHub "React" Explorer
      </Typography>
      <Typography component="h2" variant="body1" data-testid="page-sub-header">
        The latest GitHub repositories about "React"
      </Typography>
    </Box>
  );
}
