import { render, screen } from '@testing-library/react';
import { ExplorerRow } from '../ExplorerRow';
import { ExplorerRowContext } from '../ExplorerRow.context';

const mockRepository = {
  id: 'test',
  name: 'test title',
  url: 'http://test.com',
  stars: 34567,
  forks: 2345,
};

describe('ExplorerRow', () => {
  it('should render', () => {
    render(
      <ExplorerRowContext.Provider value={mockRepository}>
        <ExplorerRow />
      </ExplorerRowContext.Provider>,
    );

    expect(screen.getByRole('row')).toBeInTheDocument();
    expect(screen.getByTestId('explorer-row-title')).toHaveTextContent(
      'test title',
    );
    expect(screen.getByTestId('StarIcon')).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader')[0]).toHaveTextContent('34,567');
    expect(screen.getByTestId('ForkRightIcon')).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader')[1]).toHaveTextContent('2,345');
  });
});
