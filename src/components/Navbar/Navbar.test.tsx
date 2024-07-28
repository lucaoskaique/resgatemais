import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import "@testing-library/jest-dom"
import { Navbar } from "."

describe("<Navbar />", () => {
  it('should render the "Sobre" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("sobre-link")).toBeInTheDocument()
  })

  it('should render the "Ações" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("acoes-link")).toBeInTheDocument()
  })

  it('should render the "Doar" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("doar-link")).toBeInTheDocument()
  })

  it('should navigate to the correct URL for "Sobre" link', () => {
    render(<Navbar />)
    const sobreLink = screen.getByTestId("sobre-link")
    expect(sobreLink).toHaveAttribute("href", "#")
  })

  it('should navigate to the correct URL for "Ações" link', () => {
    render(<Navbar />)
    const acoesLink = screen.getByTestId("acoes-link")
    expect(acoesLink).toHaveAttribute("href", "#")
  })

  it('should navigate to the correct URL for "Doar" link', () => {
    render(<Navbar />)
    const doarLink = screen.getByTestId("doar-link")
    expect(doarLink).toHaveAttribute("href", "#")
  })

  it('should have the correct styling for "Doar" link', () => {
    render(<Navbar />)
    const doarLink = screen.getByTestId("doar-link")
    expect(doarLink).toHaveClass("bg-color-red")
    expect(doarLink).toHaveClass("px-4")
    expect(doarLink).toHaveClass("py-3")
  })
})
