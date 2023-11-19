import { create } from 'zustand';

import { type SearchRepositoriesQuery } from '@/api';

/**
 * A local representation of the "Repository" type from the GitHub API.
 */
export type Repository = Extract<
  NonNullable<
    NonNullable<SearchRepositoriesQuery['search']['edges']>[number]
  >['node'],
  { __typename: 'Repository' }
>;

/**
 * Parsed repository data that we can use in our UI.
 */
export type ParsedRepository = {
  id: string;
  name: string;
  description?: string | null;
  stars: number;
  forks: number;
  url: string;
};

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}
export enum OrderBy {
  STARS = 'stars',
  FORKS = 'forks',
}

export type RepositoriesStore = {
  searchString: string;
  setSearchString: (searchString: string) => void;
  repos: ParsedRepository[];
  setRepos: (repos: ParsedRepository[]) => void;
  order: Order | null;
  setOrder: (order: Order | null) => void;
  orderBy: OrderBy | null;
  setOrderBy: (orderBy: OrderBy | null) => void;
};

/**
 * A Zustand store that holds the state for the repositories.
 */
export const useRepositoriesStore = create<RepositoriesStore>((set) => ({
  searchString: '',
  setSearchString: (searchString) => set({ searchString }),
  repos: [],
  setRepos: (repos) => set({ repos }),
  order: Order.DESC,
  setOrder: (order) => set({ order }),
  orderBy: OrderBy.STARS,
  setOrderBy: (orderBy) => set({ orderBy }),
}));
