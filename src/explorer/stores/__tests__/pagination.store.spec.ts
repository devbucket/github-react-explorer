import { renderHook, waitFor } from '@testing-library/react';
import { usePaginationStore } from '../pagination.store';

describe('usePaginationStore', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.page).toBe(1);
    expect(result.current.after).toBe(null);
    expect(result.current.before).toBe(null);
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

    expect(result.current.after).toBe(null);
    expect(result.current.before).toBe(null);

    await waitFor(() => {
      result.current.setAfter('cursor');
      result.current.setBefore(null);
    });

    expect(result.current.after).toBe('cursor');
    expect(result.current.before).toBe(null);

    await waitFor(() => {
      result.current.resetCursors();
    });

    expect(result.current.after).toBe(null);
    expect(result.current.before).toBe(null);

    await waitFor(() => {
      result.current.setAfter(null);
      result.current.setBefore('cursor');
    });

    expect(result.current.after).toBe(null);
    expect(result.current.before).toBe('cursor');

    await waitFor(() => {
      result.current.resetCursors();
    });

    expect(result.current.after).toBe(null);
    expect(result.current.before).toBe(null);
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
