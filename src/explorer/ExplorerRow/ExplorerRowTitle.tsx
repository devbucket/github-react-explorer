import { useContext } from 'react';

import { Link, Typography } from '@mui/material';

import { ExplorerRowContext } from './ExplorerRow.context';

/**
 * Renders the title of a repository.
 */
export function ExplorerRowTitle() {
  const repository = useContext(ExplorerRowContext);

  return (
    <>
      <Typography
        variant="body1"
        fontWeight="500"
        data-testid="explorer-row-title"
      >
        <Link href={repository.url} target="_blank">
          {repository.name}
        </Link>
      </Typography>
      {repository.description && (
        <Typography
          component="p"
          variant="caption"
          color="textSecondary"
          noWrap
          data-testid="explorer-row-description"
        >
          {repository.description}
        </Typography>
      )}
    </>
  );
}
