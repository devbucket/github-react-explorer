import { render, screen } from '@testing-library/react';
import { ExplorerForksIcon } from '../ExplorerForksIcon';

describe('ExplorerForksIcon', () => {
  it('should render', () => {
    render(<ExplorerForksIcon />);

    expect(screen.getByTestId('ForkRightIcon')).toBeInTheDocument();
  });
});
