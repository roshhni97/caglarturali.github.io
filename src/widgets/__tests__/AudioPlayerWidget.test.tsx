import { fireEvent, render, screen } from '@testing-library/react';
import AudioPlayerWidget, { icons } from '../AudioPlayerWidget';

// Mock the Audio object globally
const mockPlay = vi.fn();
const mockPause = vi.fn();

class MockAudio {
  play = mockPlay;
  pause = mockPause;
  currentTime = 0;
  addEventListener = vi.fn();
  removeEventListener = vi.fn();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
global.Audio = MockAudio as any;

describe('<AudioPlayerWidget />', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render play icon initially', () => {
    render(<AudioPlayerWidget src={'test.mp3'} />);

    const button = screen.getByRole('button');
    const icon = button.querySelector('svg');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('data-icon', icons.play.iconName);
  });

  test('should toggle play/pause state when the button is clicked', () => {
    render(<AudioPlayerWidget src={'test.mp3'} />);

    const button = screen.getByRole('button');

    // Initial state
    expect(button.querySelector('svg')).toHaveAttribute(
      'data-icon',
      icons.play.iconName,
    );

    // Simulate a click to play
    fireEvent.click(button);
    expect(mockPlay).toHaveBeenCalled();
    expect(button.querySelector('svg')).toHaveAttribute(
      'data-icon',
      icons.pause.iconName,
    );

    // Simulate a click to pause
    fireEvent.click(button);
    expect(mockPause).toHaveBeenCalled();
    expect(button.querySelector('svg')).toHaveAttribute(
      'data-icon',
      icons.play.iconName,
    );
  });
});
