import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import MemberEntry from './MemberEntry'


describe('MemberEntry', () => {
  it('renders a heading', () => {

    const member = { firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female' };
    render(<MemberEntry/>)

    const heading = screen.getByRole('heading', { level: 1 }) 
    expect(heading).toBeInTheDocument()
  })
})
