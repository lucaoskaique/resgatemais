import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Banner } from "."

describe("<Banner />", () => {
  it("should render the heading", () => {
    const { container } = render(<Banner />)

    expect(screen.getByRole("heading", { name: /Banner/i })).toBeDefined()

    expect(container.firstChild).toMatchSnapshot()
  })
})
