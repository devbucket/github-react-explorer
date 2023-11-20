import { useSearchRepositoriesQuery } from '@/api';
import {
  useRepositoriesStore,
  type Repository,
  type ParsedRepository,
} from '../stores/repositories.store';
import { usePaginationStore } from '../stores/pagination.store';

const { setRepos } = useRepositoriesStore.getState();
const { setTotal, setPageInfo } = usePaginationStore.getState();

/**
 * A custom hook that fetches data from the GitHub API and returns it in a
 * format that is easier to use in our UI.
 */
export function useLoadRepositories() {
  const { searchString, order, orderBy } = useRepositoriesStore((state) => ({
    searchString: state.searchString,
    order: state.order,
    orderBy: state.orderBy,
  }));
  const { after, before, rowsPerPage } = usePaginationStore((state) => ({
    after: state.after,
    before: state.before,
    rowsPerPage: state.rowsPerPage,
  }));

  // const after = cursors[page] ?? null;

  // Build the query string
  const query = ['is:public', 'react', searchString, `sort:${orderBy}-${order}`]
    .filter(Boolean)
    .join(' ')
    .trim();

  // Fetch data from the GitHub API
  const { loading, error } = useSearchRepositoriesQuery({
    variables: {
      query: query,
      first: rowsPerPage,
      after: after,
      before: before,
    },
    onCompleted(data) {
      const total = data.search.repositoryCount;

      // Filter out any non-repository results
      const foundRepos = (data.search.edges ?? [])
        .filter((edge) => edge?.node?.__typename === 'Repository')
        .map((edge) => edge?.node as Repository);

      // Parse the data into a format that is easier to use in our UI
      const parsedRepos: ParsedRepository[] = foundRepos.map((repo) => ({
        id: repo.id,
        name: `${repo.owner.login}/${repo.name}`,
        description: repo.description,
        stars: repo.stargazers.totalCount,
        forks: repo.forks.totalCount,
        url: repo.url,
      }));

      setRepos(parsedRepos);
      setTotal(total);
      setPageInfo(data.search.pageInfo);
    },
  });

  return {
    loading,
    hasError: !!error,
  };
}
