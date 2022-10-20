import { describe } from 'vitest'
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App Tests', () => { 
  it('should render', () => {
    render(<App />);
  });

  it('should have title "Mi DUI es valido?"', () => {
    render(<App />);
    expect(screen.getByText('Mi DUI es valido?')).toBeInTheDocument();
  });

  it('should have an input text', () => {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should have a button with text "Validar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Validar');
  });

  it('button should have a event clickable', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Validar');
    button.click();
  } );
})
