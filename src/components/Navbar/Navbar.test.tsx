import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Navbar } from "."

describe("<Navbar />", () => {
  it('should render the "Sobre" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("sobre-link")).toBeDefined()
  })

  it('should render the "Ações" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("acoes-link")).toBeDefined()
  })

  it('should render the "Doar" link', () => {
    render(<Navbar />)
    expect(screen.getByTestId("doar-link")).toBeDefined()
  })

  it('should navigate to the correct URL for "Sobre" link', () => {
    render(<Navbar />)
    const sobreLink = screen.getByTestId("sobre-link")
    expect(sobreLink).toHaveProperty("href", "#")
  })

  it('should navigate to the correct URL for "Ações" link', () => {
    render(<Navbar />)
    const acoesLink = screen.getByTestId("acoes-link")
    expect(acoesLink).toHaveProperty("href", "#")
  })

  it('should navigate to the correct URL for "Doar" link', () => {
    render(<Navbar />)
    const doarLink = screen.getByTestId("doar-link")
    expect(doarLink).toHaveProperty("href", "#")
  })

  it('should have the correct styling for "Doar" link', () => {
    render(<Navbar />)
    const doarLink = screen.getByTestId("doar-link")
    expect(doarLink).toContain("bg-color-red")
    expect(doarLink).toContain("px-4")
    expect(doarLink).toContain("py-3")
  })
})
