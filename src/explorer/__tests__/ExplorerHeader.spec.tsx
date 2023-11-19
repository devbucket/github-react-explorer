import { render, screen } from '@testing-library/react';
import { ExplorerHeader } from '../ExplorerHeader';

describe('ExplorerHeader', () => {
  it('should render', () => {
    render(<ExplorerHeader />);

    expect(screen.getByTestId('repository-header')).toBeInTheDocument();
    expect(screen.getByTestId('stars-header')).toBeInTheDocument();
    expect(screen.getByTestId('forks-header')).toBeInTheDocument();
  });
});
