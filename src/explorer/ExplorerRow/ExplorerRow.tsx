import { TableCell, TableRow } from '@mui/material';

import { ExplorerRowTitle } from './ExplorerRowTitle';
import { ExplorerRowStars } from './ExplorerRowStars';
import { ExplorerRowForks } from './ExplorerRowForks';

/**
 * Renders a row in the explorer table.
 */
export function ExplorerRow() {
  return (
    <TableRow hover>
      <TableCell component="th" scope="row">
        <ExplorerRowTitle />
      </TableCell>
      <TableCell>
        <ExplorerRowStars />
      </TableCell>
      <TableCell>
        <ExplorerRowForks />
      </TableCell>
    </TableRow>
  );
}
