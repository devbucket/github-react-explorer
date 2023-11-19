import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header', () => {
  it('should render', () => {
    render(<Header />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByTestId('page-header')).toHaveTextContent(
      'GitHub "React" Explorer',
    );
    expect(screen.getByTestId('page-sub-header')).toHaveTextContent(
      'The latest GitHub repositories about "React"',
    );
  });
});
