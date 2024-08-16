import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Hero from "."

describe("<Hero />", () => {
  it("should render the heading", () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole("heading", { name: /Hero/ })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
