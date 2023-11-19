import { render, screen } from '@testing-library/react';
import { ExplorerRowTitle } from '../ExplorerRowTitle';
import { ExplorerRowContext } from '../ExplorerRow.context';

const mockRepository = {
  id: 'test',
  name: 'test title',
  url: 'http://test.com',
  stars: 34567,
  forks: 2345,
};

describe('ExplorerRowTitle', () => {
  it('should render title without description', () => {
    render(
      <ExplorerRowContext.Provider value={mockRepository}>
        <ExplorerRowTitle />
      </ExplorerRowContext.Provider>,
    );

    expect(screen.getByTestId('explorer-row-title')).toHaveTextContent(
      'test title',
    );
    expect(
      screen.queryByTestId('explorer-row-description'),
    ).not.toBeInTheDocument();
  });

  it('should render title with description', () => {
    render(
      <ExplorerRowContext.Provider
        value={{ ...mockRepository, description: 'test description' }}
      >
        <ExplorerRowTitle />
      </ExplorerRowContext.Provider>,
    );

    expect(screen.getByTestId('explorer-row-title')).toHaveTextContent(
      'test title',
    );
    expect(screen.getByTestId('explorer-row-description')).toHaveTextContent(
      'test description',
    );
  });
});
