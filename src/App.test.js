import { act, findByText, render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  jest.useFakeTimers();
})

test('counter advances to 1 after 1s', async () => {
  render(<App />);
  act(() => {
    jest.advanceTimersByTime(1000);
  })
  await screen.findByText('1');
});

test('counter advances to 2 after 2s', async () => {
  render(<App />);
  act(() => {
    jest.advanceTimersByTime(2000);
  })
  await screen.findByText('2');
});

test('counter advances to 3 after 3s', async () => {
  render(<App />);
  act(() => {
    jest.advanceTimersByTime(3000);
  })
  await screen.findByText('3');
});