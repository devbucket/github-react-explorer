import { create } from 'zustand';
import { type PageInfo } from '@/api';

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}
export enum OrderBy {
  STARS = 'stars',
  FORKS = 'forks',
}

/**
 * A map of page numbers to cursors.
 */
export type Cursors = {
  [key: number]: string | null;
};

export type PaginationStore = {
  page: number;
  setPage: (page: number) => void;
  after: string | null;
  setAfter: (after: string | null) => void;
  before: string | null;
  setBefore: (before: string | null) => void;
  resetCursors: () => void;
  pageInfo: Omit<PageInfo, '__typename'> | null;
  setPageInfo: (pageInfo: Omit<PageInfo, '__typename'> | null) => void;
  rowsPerPage: number;
  setRowsPerPage: (rowsPerPage: number) => void;
  total: number;
  setTotal: (total: number) => void;
};

/**
 * A Zustand store that holds the state for the pagination.
 */
export const usePaginationStore = create<PaginationStore>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),
  after: null,
  setAfter: (after) => set({ after }),
  before: null,
  setBefore: (before) => set({ before }),
  resetCursors: () => set({ after: null, before: null }),
  pageInfo: null,
  setPageInfo: (pageInfo) => set({ pageInfo }),
  rowsPerPage: 10,
  setRowsPerPage: (rowsPerPage) => set({ rowsPerPage }),
  total: 0,
  setTotal: (total) => set({ total }),
}));
