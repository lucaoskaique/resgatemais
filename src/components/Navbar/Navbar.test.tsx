import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Navbar } from "."

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
