import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page, { cloneArray, substract, sum }from './page'


describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})

describe('Page ', () => {
  it('sum', () => {
    render(<Page />)
    const summary = sum(1, 2);
    expect(summary).toBe(3)
  })
})

describe('Page', () => {
  it('substract', () => {
    render (<Page/>);
    const result = substract(2, 1);
    expect(result).toBe(1);
  })
})

test('Page', () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array);
})

test('render Home heading and About link', () => {
  render (<Page/>);
  const heading = screen.getByText(/WrongHome/i);
  const link = screen.getByRole('link', {name: /About/i});

  expect(heading).toBeInTheDocument();
  expect (link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/about');
  expect(link).toHaveAttribute('href');
})

// test('render About page link with correct navigation', () => {
//   render (
//     <MemoryRouter>
//       <Page></Page>
//     </MemoryRouter>
//   );

//   const link = screen.getByRole('link', {name: /About/i});
//   expect(link).toHaveAttribute('href', '/about');
// }); 