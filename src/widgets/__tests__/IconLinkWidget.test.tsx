import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import IconLinkWidget from '../IconLinkWidget';

describe('<IconLinkWidget />', () => {
  test('should render with a text, href target and fallback title', async () => {
    const text = 'Dummy Link';
    const target = 'https://hello.world';
    render(<IconLinkWidget text={text} target={target} icon={faEarth} />);

    await screen.findByTestId('icon-link');
    const iconLink = screen.getByTestId('icon-link');
    const icon = iconLink.querySelector('svg');
    const link = iconLink.querySelector('a');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-icon', faEarth.iconName);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('href', target);
    expect(link).toHaveAttribute('title', text);
  });

  test('should render with a function target and handle click', async () => {
    const target = vi.fn();
    render(<IconLinkWidget text="Dummy Link" target={target} icon={faEarth} />);

    await screen.findByTestId('icon-link');
    const iconLink = screen.getByTestId('icon-link');
    const link = iconLink.querySelector('a');
    await userEvent.click(link);

    expect(link).toHaveAttribute('href', '#');
    expect(target).toHaveBeenCalledOnce();
  });
});
