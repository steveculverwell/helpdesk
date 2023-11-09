import { render, screen } from "@testing-library/react";
import Navbar from '../../app/components/Navbar'
import '@testing-library/jest-dom'

describe('Navbar', () => {
    it('renders a heading', () => {
        render(<Navbar />)

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument()
    })

    it('renders an image with src and alt', () => {
        render(<Navbar />)

        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/_next/image?url=%2Fimg.jpg&w=256&q=100')
        expect(image).toHaveAttribute('alt', 'Logo')
    })
})