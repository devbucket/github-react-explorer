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
  cursors: Cursors;
  setCursors: (page: number, cursor: string | null) => void;
  resetCursors: () => void;
  pageInfo: PageInfo | null;
  setPageInfo: (pageInfo: PageInfo | null) => void;
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
  cursors: {},
  setCursors: (page, cursor) => {
    set((prevState) => ({
      cursors: {
        ...prevState.cursors,
        [page]: cursor,
      },
    }));
  },
  resetCursors: () => {
    set({ cursors: {} });
  },
  pageInfo: null,
  setPageInfo: (pageInfo) => set({ pageInfo }),
  rowsPerPage: 10,
  setRowsPerPage: (rowsPerPage) => set({ rowsPerPage }),
  total: 0,
  setTotal: (total) => set({ total }),
}));
