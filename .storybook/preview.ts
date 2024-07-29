import { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"
import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark"
      },
      defaultTheme: "light"
    })
  ]
}

export default preview
