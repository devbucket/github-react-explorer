import { TableCell, TableSortLabel } from '@mui/material';

import {
  useRepositoriesStore,
  OrderBy,
  Order,
} from '../stores/repositories.store';
import { ExplorerStarsIcon } from '../ExplorerStarsIcon';

const { setOrder, setOrderBy } = useRepositoriesStore.getState();

/**
 * Renders the header of the stars column.
 */
export function ExplorerHeaderStars() {
  const { order, orderBy } = useRepositoriesStore((state) => ({
    order: state.order,
    orderBy: state.orderBy,
  }));

  /**
   * Changes the sort order of the stars column.
   */
  const handleSort = () => {
    // If the stars column is not the current order by column, set it as the
    // order by column and set the order to descending.
    if (orderBy !== OrderBy.STARS) {
      setOrderBy(OrderBy.STARS);
      setOrder(Order.DESC);
      return;
    }

    // If the stars column is the current order by column, toggle the order.
    setOrder(order === Order.ASC ? Order.DESC : Order.ASC);
  };

  return (
    <TableCell
      data-testid="stars-header"
      sortDirection={orderBy === OrderBy.STARS && order ? order : false}
    >
      <TableSortLabel
        active={orderBy === OrderBy.STARS}
        direction={orderBy === OrderBy.STARS && order ? order : Order.DESC}
        onClick={handleSort}
        data-testid="stars-header-sort-label"
      >
        <ExplorerStarsIcon />
        <span>Stars</span>
      </TableSortLabel>
    </TableCell>
  );
}
