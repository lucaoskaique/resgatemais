import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Hero from "."

describe("<Hero />", () => {
  it("should render the heading text", () => {
    render(
      <Hero
        bgUrl=""
        home={{
          logo: "",
          title: ""
        }}
        donatePage={{
          title: "",
          paragraph1: undefined,
          paragraph2: undefined,
          donateCall: "",
          qrCodeUrl: ""
        }}
      />
    )
    expect(
      screen.getByText("Organização Audiovisual da Sociedade Civil")
    ).toBeDefined()
  })
})
