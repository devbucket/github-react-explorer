import { useContext } from 'react';

import { Stack } from '@mui/material';

import { ExplorerRowContext } from './ExplorerRow.context';
import { ExplorerForksIcon } from '../ExplorerForksIcon';

/**
 * Renders the forks count of a repository.
 */
export function ExplorerRowForks() {
  const repository = useContext(ExplorerRowContext);

  return (
    <Stack direction="row">
      <ExplorerForksIcon />
      <span role="columnheader">{repository.forks.toLocaleString()}</span>
    </Stack>
  );
}
