import { render, screen } from '@testing-library/react';
import { ExplorerLoadingRow } from '../ExplorerLoadingRow';

describe('ExplorerLoadingRow', () => {
  it('should render', () => {
    render(<ExplorerLoadingRow />);

    expect(screen.getByRole('row')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
