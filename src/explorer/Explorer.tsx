import { Paper, Table, TableContainer } from '@mui/material';

import { ExplorerToolbar } from './ExplorerToolbar';
import { ExplorerHeader } from './ExplorerHeader';
import { ExplorerBody } from './ExplorerBody';
import { ExplorerPagination } from './ExplorerPagination';
import { useLoadRepositories } from './hooks/useLoadRepositories';

/**
 * Renders a table of repositories related to "React".
 */
export function Explorer() {
  const { loading, hasError } = useLoadRepositories();

  return (
    <Paper sx={{ width: 768, mx: 'auto' }} elevation={8}>
      <ExplorerToolbar />
      <TableContainer>
        <Table sx={{ tableLayout: 'fixed' }}>
          <ExplorerHeader />
          <ExplorerBody loading={loading} hasError={hasError} />
        </Table>
      </TableContainer>
      <ExplorerPagination />
    </Paper>
  );
}
