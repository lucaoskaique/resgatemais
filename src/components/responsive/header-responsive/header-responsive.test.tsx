import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom"

import { HeaderResponsive } from "."

describe("<HeaderResponsive />", () => {
  it("should render the header with logo and donate button", () => {
    render(<HeaderResponsive />)

    const logo = screen.getByAltText("Logo")
    expect(logo).toBeInTheDocument()

    const donateButton = screen.getByTestId("doar-link")
    expect(donateButton).toBeInTheDocument()
    expect(donateButton).toHaveTextContent("Doar")
  })

  it("should render the hamburger button and toggle the menu", () => {
    render(<HeaderResponsive />)
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    expect(toggleButton).toBeInTheDocument()

    const menu = screen.getByRole("navigation")
    expect(menu).toHaveClass("hidden")

    fireEvent.click(toggleButton)
    expect(menu).not.toHaveClass("hidden")

    fireEvent.click(toggleButton)
    expect(menu).toHaveClass("hidden")
  })

  it('should render the links "Sobre" and "Ações" in the dropdown menu', () => {
    render(<HeaderResponsive />)

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })

    fireEvent.click(toggleButton)

    const sobreLink = screen.getByTestId("sobre-link")
    expect(sobreLink).toBeInTheDocument()
    expect(sobreLink).toHaveTextContent("Sobre")

    const acoesLink = screen.getByTestId("acoes-link")
    expect(acoesLink).toBeInTheDocument()
    expect(acoesLink).toHaveTextContent("Ações")
  })

  it("should change header background color on scroll", () => {
    render(<HeaderResponsive />)

    const header = screen.getByRole("banner")
    expect(header).toHaveClass("bg-transparent")

    fireEvent.scroll(window, { target: { scrollY: 100 } })

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const classList = (mutation.target as HTMLElement).classList
          expect(classList.contains("bg-transparent")).toBe(false)
          expect(classList.contains("dark:bg-[#323232]")).toBe(true)
          expect(classList.contains("bg-white")).toBe(true)
          observer.disconnect()
        }
      })
    })

    observer.observe(header, { attributes: true })
  })

  it("should show and hide the menu correctly", () => {
    render(<HeaderResponsive />)
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    const menu = screen.getByRole("navigation")

    fireEvent.click(toggleButton)
    expect(menu).not.toHaveClass("hidden")

    fireEvent.click(toggleButton)
    expect(menu).toHaveClass("hidden")
  })

  it("should contain all menu items", () => {
    render(<HeaderResponsive />)
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })

    fireEvent.click(toggleButton)

    const menuItems = ["Sobre", "Ações"]
    menuItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
