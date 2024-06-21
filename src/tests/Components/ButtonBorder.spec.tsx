import { render, screen, fireEvent } from '@testing-library/react';
import ButtonBorder from '../../components/ButtonBorder'; 

describe('ButtonBorder Component', () => {
  it('renders with the correct text', () => {
    render(<ButtonBorder text="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('handles onClick event', () => {
    const onClickMock = jest.fn();
    render(<ButtonBorder text="Click Me" onClick={onClickMock} />);
    
    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });


});
