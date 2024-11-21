import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import GoalsV2Desktop from './GoalsV2.Desktop'

const mockProps = {
  asset: 'https://example.com/asset.jpg',
  link: 'https://example.com',
  countSql: 'SELECT COUNT(*) FROM syn12345',
  title: 'Test Title',
  summary: 'Test Summary',
}

const queryClient = new QueryClient()

describe('GoalsV2Desktop', () => {
  test('renders the component with the correct props', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <GoalsV2Desktop {...mockProps} />
      </QueryClientProvider>,
    )

    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', mockProps.asset)
    expect(image).toHaveAttribute('alt', mockProps.title)

    const title = screen.getByText(mockProps.title)
    expect(title).toBeInTheDocument()
  })

  test('opens the link when the card is clicked', () => {
    window.open = jest.fn()

    render(
      <QueryClientProvider client={queryClient}>
        <GoalsV2Desktop {...mockProps} />
      </QueryClientProvider>,
    )

    const card = screen.getByRole('button', { name: /Test Title/i })
    fireEvent.click(card)

    expect(window.open).toHaveBeenCalledWith(mockProps.link)
  })
})
