import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import "@testing-library/jest-dom"
import { Header } from "."

const mockScrollTo = vi.fn()
global.scrollTo = mockScrollTo

describe("<Header />", () => {
  it("should render the heading text", () => {
    render(<Header />)
    expect(
      screen.getByText("Organização Audiovisual da Sociedade Civil")
    ).toBeInTheDocument()
  })

  it('should render the correct images with alt text "Logo"', () => {
    render(<Header />)
    const images = screen.getAllByAltText("Logo")
    expect(images).toHaveLength(3)
    expect(images[0]).toBeInTheDocument()
    expect(images[1]).toBeInTheDocument()
  })

  it("should apply the correct classes based on scroll position", () => {
    render(<Header />)

    window.scrollY = 100
    window.dispatchEvent(new Event("scroll"))
    const header = screen.getByTestId("header")

    expect(header).toHaveClass("bg-white")
    expect(header).not.toHaveClass("bg-transparent")
  })

  it("should toggle the background color when scrolled", () => {
    render(<Header />)

    window.scrollY = 0
    window.dispatchEvent(new Event("scroll"))
    let header = screen.getByTestId("header")
    expect(header).toHaveClass("bg-transparent")
    expect(header).not.toHaveClass("bg-white")

    window.scrollY = 100
    window.dispatchEvent(new Event("scroll"))
    header = screen.getByTestId("header")
    expect(header).toHaveClass("bg-white")
    expect(header).not.toHaveClass("bg-transparent")
  })
})
