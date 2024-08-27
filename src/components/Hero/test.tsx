import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Hero from "."

describe("<Hero />", () => {
  it("should render the heading text", () => {
    render(
      <Hero
        bgUrl=""
        home={{
          logo: undefined,
          title: undefined
        }}
        donatePage={{
          title: undefined,
          paragraph1: undefined,
          paragraph2: undefined,
          donateCall: undefined,
          qrCode: undefined
        }}
      />
    )
    expect(
      screen.getByText("Organização Audiovisual da Sociedade Civil")
    ).toBeDefined()
  })
})
