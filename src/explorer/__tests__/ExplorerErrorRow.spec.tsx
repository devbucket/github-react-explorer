import { render, screen } from '@testing-library/react';
import { ExplorerErrorRow } from '../ExplorerErrorRow';

describe('ExplorerErrorRow', () => {
  it('should render', () => {
    render(<ExplorerErrorRow />);

    expect(screen.getByRole('row')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
