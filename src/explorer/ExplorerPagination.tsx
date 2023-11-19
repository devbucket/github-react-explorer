import { TablePagination } from '@mui/material';
import { usePaginationStore } from './stores/pagination.store';

const { setPage, setCursors, resetCursors, setRowsPerPage } =
  usePaginationStore.getState();

export function ExplorerPagination() {
  const { total, page, pageInfo, rowsPerPage } = usePaginationStore(
    (state) => ({
      total: state.total,
      page: state.page,
      pageInfo: state.pageInfo,
      rowsPerPage: state.rowsPerPage,
    }),
  );

  /**
   * Handle rows per page change.
   */
  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    // Reset cursors
    resetCursors();
  };

  /**
   * Handle page change.
   */
  const handlePageChange = (_: unknown, newPage: number) => {
    setPage(newPage);

    if (newPage === 1) {
      resetCursors();
      return;
    }

    if (newPage > page) {
      setCursors(newPage, pageInfo?.endCursor || null);
    }
  };

  return (
    <TablePagination
      component="div"
      rowsPerPageOptions={[10, 25, 50, 100]}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleRowsPerPageChange}
      page={total === 0 ? 0 : page}
      onPageChange={handlePageChange}
      count={total}
    />
  );
}
