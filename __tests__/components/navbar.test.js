import { render, screen } from "@testing-library/react";
import Navbar from '../../app/components/Navbar'
import '@testing-library/jest-dom'

describe('Navbar', () => {
    it('renders a heading', () => {
        render(<Navbar />)

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument()
    })
})