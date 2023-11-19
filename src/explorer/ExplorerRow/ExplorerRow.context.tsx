import { createContext } from 'react';

import { type ParsedRepository } from '../stores/repositories.store';

/**
 * Context for the repository data.
 */
export const ExplorerRowContext = createContext<ParsedRepository>(
  {} as ParsedRepository,
);
