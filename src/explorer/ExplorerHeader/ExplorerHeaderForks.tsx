import { TableCell, TableSortLabel } from '@mui/material';

import {
  useRepositoriesStore,
  OrderBy,
  Order,
} from '../stores/repositories.store';
import { ExplorerForksIcon } from '../ExplorerForksIcon';

const { setOrder, setOrderBy } = useRepositoriesStore.getState();

/**
 * Renders the header of the forks column.
 */
export function ExplorerHeaderForks() {
  const { order, orderBy } = useRepositoriesStore((state) => ({
    order: state.order,
    orderBy: state.orderBy,
  }));

  /**
   * Changes the sort order of the forks column.
   */
  const handleSort = () => {
    // If the forks column is not the current order by column, set it as the
    // order by column and set the order to descending.
    if (orderBy !== OrderBy.FORKS) {
      setOrderBy(OrderBy.FORKS);
      setOrder(Order.DESC);
      return;
    }

    // If the forks column is the current order by column, toggle the order.
    setOrder(order === Order.ASC ? Order.DESC : Order.ASC);
  };

  return (
    <TableCell
      data-testid="forks-header"
      sortDirection={orderBy === 'forks' && order ? order : false}
    >
      <TableSortLabel
        active={orderBy === OrderBy.FORKS}
        direction={orderBy === OrderBy.FORKS && order ? order : Order.DESC}
        onClick={handleSort}
        data-testid="forks-header-sort-label"
      >
        <ExplorerForksIcon />
        <span>Forks</span>
      </TableSortLabel>
    </TableCell>
  );
}
