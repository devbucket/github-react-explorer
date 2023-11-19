import { render, screen, renderHook, fireEvent } from '@testing-library/react';
import { ExplorerHeaderForks } from '../ExplorerHeaderForks';
import {
  useRepositoriesStore,
  OrderBy,
  Order,
} from '../../stores/repositories.store.ts';

describe('ExplorerHeaderForks', () => {
  it('should render', () => {
    render(<ExplorerHeaderForks />);

    expect(screen.getByTestId('forks-header')).toBeInTheDocument();
  });

  it('should change the sort field and the sort order', async () => {
    const { result } = renderHook(() => useRepositoriesStore());

    render(<ExplorerHeaderForks />);

    expect(result.current.orderBy).toEqual(OrderBy.STARS);
    expect(result.current.order).toEqual(Order.DESC);

    fireEvent.click(screen.getByTestId('forks-header-sort-label'));

    expect(result.current.orderBy).toEqual(OrderBy.FORKS);
    expect(result.current.order).toEqual(Order.DESC);

    fireEvent.click(screen.getByTestId('forks-header-sort-label'));

    expect(result.current.orderBy).toEqual(OrderBy.FORKS);
    expect(result.current.order).toEqual(Order.ASC);

    fireEvent.click(screen.getByTestId('forks-header-sort-label'));

    expect(result.current.orderBy).toEqual(OrderBy.FORKS);
    expect(result.current.order).toEqual(Order.DESC);
  });
});
