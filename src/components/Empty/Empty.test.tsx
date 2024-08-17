import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Empty from "."

describe("<Empty />", () => {
  it("should render the heading", () => {
    const { container } = render(
      <Empty title="My Title" description="My Description" />
    )

    expect(screen.getByRole("heading", { name: /Empty/i })).toBeDefined()

    expect(container.firstChild).toMatchSnapshot()
  })
})
