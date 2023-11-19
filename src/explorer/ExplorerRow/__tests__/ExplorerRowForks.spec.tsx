import { render, screen } from '@testing-library/react';
import { ExplorerRowForks } from '../ExplorerRowForks';
import { ExplorerRowContext } from '../ExplorerRow.context';

const mockRepository = {
  id: 'test',
  name: 'test title',
  url: 'http://test.com',
  stars: 34567,
  forks: 2345,
};

describe('ExplorerRowForks', () => {
  it('should render', () => {
    render(
      <ExplorerRowContext.Provider value={mockRepository}>
        <ExplorerRowForks />
      </ExplorerRowContext.Provider>,
    );

    expect(screen.getByTestId('ForkRightIcon')).toBeInTheDocument();
    expect(screen.getByRole('columnheader')).toHaveTextContent('2,345');
  });
});
