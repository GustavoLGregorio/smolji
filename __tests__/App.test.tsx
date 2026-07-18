import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  it('should render without crashing', () => {
    // This mostly verifies that the DOM mounts and Next/React don't throw immediately
    // due to window/document undefined issues.
    render(<App />);
    expect(screen.getByText(/MojiSnap/i)).toBeTruthy();
  });
});
