import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import Navbar from "."

const mockScrollTo = vi.fn()
global.scrollTo = mockScrollTo

describe("<Navbar />", () => {
  it("should render the heading text", () => {
    render(<Navbar />)
    expect(
      screen.getByText("Organização Audiovisual da Sociedade Civil")
    ).toBeDefined()
  })

  it('should render the "Doar" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("doar-link-small")).toBeDefined()
    expect(screen.getByTestId("doar-link-large")).toBeDefined()
  })

  it("should render the logo", () => {
    render(<Navbar />)
    expect(screen.getByTestId("small-screen-logo")).toBeDefined()
    expect(screen.getByTestId("large-screen-light-logo")).toBeDefined()
    expect(screen.getByTestId("large-screen-dark-logo")).toBeDefined()
  })

  it("should toggle the background color when scrolled", () => {
    render(<Navbar />)

    window.scrollY = 0
    window.dispatchEvent(new Event("scroll"))
    let header = screen.getByTestId("header")
    expect(header.classList.contains("bg-transparent")).toBe(true)
    expect(header.classList.contains("bg-background")).toBe(false)

    window.scrollY = 100
    window.dispatchEvent(new Event("scroll"))
    header = screen.getByTestId("header")
    expect(header.classList.contains("bg-background")).toBe(true)
    expect(header.classList.contains("bg-transparent")).toBe(false)
  })
})

describe("<Navbar />", () => {
  it('should render the "Sobre" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("sobre-link-small")).toBeDefined()
    expect(screen.getByTestId("sobre-link-large")).toBeDefined()
  })

  it('should render the "Ações" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("acoes-link-small")).toBeDefined()
    expect(screen.getByTestId("acoes-link-large")).toBeDefined()
  })
})
