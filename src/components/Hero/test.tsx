import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Hero from "."

describe("<Hero />", () => {
  it("should render the heading text", () => {
    render(<Hero />)
    expect(
      screen.getByText("Organização Audiovisual da Sociedade Civil")
    ).toBeDefined()
  })
})
