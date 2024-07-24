import { Preview, ReactRenderer } from "@storybook/react"
import { withThemeByDataAttribute } from "@storybook/addon-themes"
import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {},

  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark"
      },
      defaultTheme: "light",
      attributeName: "data-mode"
    })
  ]
}

export default preview
