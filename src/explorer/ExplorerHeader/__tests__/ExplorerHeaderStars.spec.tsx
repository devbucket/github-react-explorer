import {
  render,
  screen,
  renderHook,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { ExplorerHeaderStars } from '../ExplorerHeaderStars';
import {
  useRepositoriesStore,
  OrderBy,
  Order,
} from '../../stores/repositories.store.ts';

describe('ExplorerHeaderStars', () => {
  it('should render', () => {
    render(<ExplorerHeaderStars />);

    expect(screen.getByTestId('stars-header')).toBeInTheDocument();
  });

  it('should trigger the sort function when the sort label is clicked', async () => {
    const { result } = renderHook(() => useRepositoriesStore());

    render(<ExplorerHeaderStars />);

    expect(result.current.orderBy).toEqual(OrderBy.STARS);
    expect(result.current.order).toEqual(Order.DESC);

    fireEvent.click(screen.getByTestId('stars-header-sort-label'));

    expect(result.current.orderBy).toEqual(OrderBy.STARS);
    expect(result.current.order).toEqual(Order.ASC);

    fireEvent.click(screen.getByTestId('stars-header-sort-label'));

    expect(result.current.orderBy).toEqual(OrderBy.STARS);
    expect(result.current.order).toEqual(Order.DESC);
  });

  it('should change the sort field', async () => {
    const { result } = renderHook(() => useRepositoriesStore());
    render(<ExplorerHeaderStars />);

    expect(result.current.orderBy).toEqual(OrderBy.STARS);
    expect(result.current.order).toEqual(Order.DESC);

    await waitFor(() => {
      result.current.setOrderBy(OrderBy.FORKS);
      result.current.setOrder(Order.ASC);
    });

    expect(result.current.orderBy).toEqual(OrderBy.FORKS);
    expect(result.current.order).toEqual(Order.ASC);

    fireEvent.click(screen.getByTestId('stars-header-sort-label'));

    expect(result.current.orderBy).toEqual(OrderBy.STARS);
    expect(result.current.order).toEqual(Order.DESC);
  });
});
