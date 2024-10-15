import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuProvider } from '~/src/contexts/MenuContext';
import MenuWidget, { icons } from '../MenuWidget';

describe('<MenuWidget />', () => {
  test('should handle open/close state', async () => {
    render(
      <MenuProvider>
        <MenuWidget />
      </MenuProvider>,
    );

    const button = screen.getByRole('button');
    const icon = button.querySelector('svg');

    // Initial state
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-icon', icons.open.iconName);

    // Click to open
    await userEvent.click(button);
    expect(icon).toHaveAttribute('data-icon', icons.close.iconName);

    // Click to close
    await userEvent.click(button);
    expect(icon).toHaveAttribute('data-icon', icons.open.iconName);
  });
});
