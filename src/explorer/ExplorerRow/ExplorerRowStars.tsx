import { useContext } from 'react';

import { Stack } from '@mui/material';

import { ExplorerRowContext } from './ExplorerRow.context';
import { ExplorerStarsIcon } from '../ExplorerStarsIcon';

/**
 * Renders the stars count of a repository.
 */
export function ExplorerRowStars() {
  const repository = useContext(ExplorerRowContext);

  return (
    <Stack direction="row">
      <ExplorerStarsIcon />
      <span role="columnheader">{repository.stars.toLocaleString()}</span>
    </Stack>
  );
}
