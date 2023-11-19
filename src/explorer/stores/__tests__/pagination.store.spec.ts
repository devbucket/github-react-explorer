import { renderHook, waitFor } from '@testing-library/react';
import { usePaginationStore } from '../pagination.store';

describe('usePaginationStore', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.page).toBe(1);
    expect(result.current.cursors).toEqual({});
    expect(result.current.pageInfo).toBe(null);
    expect(result.current.rowsPerPage).toBe(10);
    expect(result.current.total).toBe(0);
  });

  it('should set the page', async () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.page).toBe(1);

    await waitFor(() => {
      result.current.setPage(2);
    });

    expect(result.current.page).toBe(2);
  });

  it('should set and reset cursors', async () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.cursors).toEqual({});

    await waitFor(() => {
      result.current.setCursors(2, 'cursor');
    });

    expect(result.current.cursors).toEqual(
      expect.objectContaining({
        2: 'cursor',
      }),
    );

    await waitFor(() => {
      result.current.resetCursors();
    });

    expect(result.current.cursors).toEqual({});
  });

  it('should set the page info', async () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.pageInfo).toBe(null);

    await waitFor(() => {
      result.current.setPageInfo({
        hasNextPage: true,
        hasPreviousPage: true,
        startCursor: 'startCursor',
        endCursor: 'endCursor',
      });
    });

    expect(result.current.pageInfo).toEqual(
      expect.objectContaining({
        hasNextPage: true,
        hasPreviousPage: true,
        startCursor: 'startCursor',
        endCursor: 'endCursor',
      }),
    );
  });

  it('should set the rows per page', async () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.rowsPerPage).toBe(10);

    await waitFor(() => {
      result.current.setRowsPerPage(20);
    });

    expect(result.current.rowsPerPage).toBe(20);
  });

  it('should set the total', async () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.total).toBe(0);

    await waitFor(() => {
      result.current.setTotal(100);
    });

    expect(result.current.total).toBe(100);
  });
});
