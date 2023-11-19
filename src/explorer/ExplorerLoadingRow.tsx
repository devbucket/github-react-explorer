import { CircularProgress, TableCell, TableRow } from '@mui/material';

/**
 * Renders a table row that spans all columns and shows a loading indicator.
 */
export function ExplorerLoadingRow() {
  return (
    <TableRow>
      <TableCell colSpan={3} align="center">
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
}
