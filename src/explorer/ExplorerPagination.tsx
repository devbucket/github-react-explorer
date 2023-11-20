import { TablePagination } from '@mui/material';

import { usePaginationStore } from './stores/pagination.store';

const { setPage, resetCursors, setRowsPerPage, setAfter, setBefore } =
  usePaginationStore.getState();

/**
 * Renders the table pagination.
 */
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
    // Set the new page.
    setPage(newPage);

    // If we are on the first page, reset cursors.
    if (newPage === 1) {
      resetCursors();
      return;
    }

    if (newPage < page) {
      setBefore(pageInfo?.startCursor || null);
      setAfter(null);
      return;
    }

    setAfter(pageInfo?.endCursor || null);
    setBefore(null);
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
