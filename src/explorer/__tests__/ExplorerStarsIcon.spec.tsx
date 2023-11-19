import { render, screen } from '@testing-library/react';
import { ExplorerStarsIcon } from '../ExplorerStarsIcon';

describe('ExplorerStarsIcon', () => {
  it('should render', () => {
    render(<ExplorerStarsIcon />);

    expect(screen.getByTestId('StarIcon')).toBeInTheDocument();
  });
});
