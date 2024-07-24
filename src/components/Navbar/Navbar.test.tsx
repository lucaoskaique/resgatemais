import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Navbar from "."

describe("<Navbar />", () => {
  it("should render the heading", () => {
    render(<Navbar />)

    expect(screen.getByRole("heading", { name: /Navbar/i })).toBeDefined()

    expect(document.body).toMatchSnapshot()
  })
})
