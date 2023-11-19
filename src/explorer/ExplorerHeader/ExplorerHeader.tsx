import { TableCell, TableHead, TableRow } from '@mui/material';

import { ExplorerHeaderStars } from './ExplorerHeaderStars';
import { ExplorerHeaderForks } from './ExplorerHeaderForks';

/**
 * Renders the header of the explorer table.
 */
export function ExplorerHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell width="60%" data-testid="repository-header">
          Repository
        </TableCell>
        <ExplorerHeaderStars />
        <ExplorerHeaderForks />
      </TableRow>
    </TableHead>
  );
}
