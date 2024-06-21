import { render, screen, fireEvent } from '@testing-library/react';
import FormInputs from '../../components/FormInputs';

describe('testing FormInputs', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <FormInputs
        label="Email"
        onChange={mockOnChange}
        value=""
        id="email"
        error=""
      />
    );
  });

  it('renders label and input field', () => {
    const labelElement = screen.getByText('Email');
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', { name: 'Email' });
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('id', 'email');
  });

  it('handles input change', () => {
    const inputElement = screen.getByRole('textbox', { name: 'Email' });
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('displays error message', () => {
    render(
      <FormInputs
        label="Password"
        onChange={mockOnChange}
        value=""
        id="password"
        error="Password is required"
      />
    );

    const errorElement = screen.getByText('Password is required');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('text-red-500');
  });

});
