import { renderHook, waitFor } from '@testing-library/react';
import { useRepositoriesStore, Order, OrderBy } from '../repositories.store';

describe('useRepositoriesStore', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useRepositoriesStore());

    expect(result.current.searchString).toBe('');
    expect(result.current.repos).toEqual([]);
    expect(result.current.order).toBe(Order.DESC);
    expect(result.current.orderBy).toBe(OrderBy.STARS);
  });

  it('should set the search string', async () => {
    const { result } = renderHook(() => useRepositoriesStore());

    expect(result.current.searchString).toBe('');

    await waitFor(() => {
      result.current.setSearchString('test');
    });

    expect(result.current.searchString).toBe('test');
  });

  it('should set the repos', async () => {
    const { result } = renderHook(() => useRepositoriesStore());

    expect(result.current.repos).toEqual([]);

    await waitFor(() => {
      result.current.setRepos([
        {
          id: 'id',
          name: 'name',
          description: 'description',
          stars: 1,
          forks: 1,
          url: 'url',
        },
      ]);
    });

    expect(result.current.repos).toEqual(
      expect.arrayContaining([
        {
          id: 'id',
          name: 'name',
          description: 'description',
          stars: 1,
          forks: 1,
          url: 'url',
        },
      ]),
    );
  });

  it('should set the order', async () => {
    const { result } = renderHook(() => useRepositoriesStore());

    expect(result.current.order).toBe(Order.DESC);

    await waitFor(() => {
      result.current.setOrder(Order.ASC);
    });

    expect(result.current.order).toBe(Order.ASC);
  });

  it('should set the order by', async () => {
    const { result } = renderHook(() => useRepositoriesStore());

    expect(result.current.orderBy).toBe(OrderBy.STARS);

    await waitFor(() => {
      result.current.setOrderBy(OrderBy.FORKS);
    });

    expect(result.current.orderBy).toBe(OrderBy.FORKS);
  });
});
