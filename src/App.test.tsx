import { render, screen } from '@testing-library/react'
import PresentationsHero from './App'

describe('PresentationsHero', () => {
  it('renders heading and subtitle', () => {
    render(<PresentationsHero />)

    expect(screen.getByText('Presentations')).toBeInTheDocument()
    expect(screen.getByText('Browse Figma Slides for your next pitch')).toBeInTheDocument()
  })

  it('renders startup title and badges', () => {
    render(<PresentationsHero />)

    expect(screen.getByText('Startup Pitch')).toBeInTheDocument()
    expect(screen.getByText('MONTH XX YEAR')).toBeInTheDocument()
    expect(screen.getByText('CONFIDENTIAL')).toBeInTheDocument()
    expect(screen.getByText('TAGLINE')).toBeInTheDocument()
  })
})
