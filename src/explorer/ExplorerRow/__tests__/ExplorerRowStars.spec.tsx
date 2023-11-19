import { render, screen } from '@testing-library/react';
import { ExplorerRowStars } from '../ExplorerRowStars';
import { ExplorerRowContext } from '../ExplorerRow.context';

const mockRepository = {
  id: 'test',
  name: 'test title',
  url: 'http://test.com',
  stars: 34567,
  forks: 2345,
};

describe('ExplorerRowStars', () => {
  it('should render', () => {
    render(
      <ExplorerRowContext.Provider value={mockRepository}>
        <ExplorerRowStars />
      </ExplorerRowContext.Provider>,
    );

    expect(screen.getByTestId('StarIcon')).toBeInTheDocument();
    expect(screen.getByRole('columnheader')).toHaveTextContent('34,567');
  });
});
