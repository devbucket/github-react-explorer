import { TableRow, TableCell, Alert } from '@mui/material';

/**
 * Renders a table row that spans all columns and shows an error message.
 */
export function ExplorerErrorRow() {
  return (
    <TableRow>
      <TableCell colSpan={3} align="center">
        <Alert severity="error">
          Something went wrong while loading the repositories.
        </Alert>
      </TableCell>
    </TableRow>
  );
}
