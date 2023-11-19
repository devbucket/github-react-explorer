import { TableBody } from '@mui/material';

import { useRepositoriesStore } from './stores/repositories.store';
import { ExplorerLoadingRow } from './ExplorerLoadingRow';
import { ExplorerErrorRow } from './ExplorerErrorRow';
import { ExplorerRow, ExplorerRowContext } from './ExplorerRow';

type Props = {
  loading: boolean;
  hasError: boolean;
};

/**
 * Renders the body of the table.
 */
export function ExplorerBody({ loading, hasError }: Props) {
  const repos = useRepositoriesStore((state) => state.repos);

  if (loading) {
    return (
      <TableBody>
        <ExplorerLoadingRow />
      </TableBody>
    );
  }

  if (hasError) {
    return (
      <TableBody>
        <ExplorerErrorRow />
      </TableBody>
    );
  }

  return (
    <TableBody>
      {repos.map((repo) => (
        <ExplorerRowContext.Provider key={repo.id} value={repo}>
          <ExplorerRow />
        </ExplorerRowContext.Provider>
      ))}
    </TableBody>
  );
}
