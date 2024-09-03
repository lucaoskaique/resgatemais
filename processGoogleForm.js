/* eslint-disable no-console */
const fs = require("fs")
const { googleFormsToJson } = require("react-google-forms-hooks")

googleFormsToJson(
  "https://docs.google.com/forms/d/e/1FAIpQLSfLpiO1MYjDuaMwAp3EDhFRjaw_HC4UGDSQ9oX2zf_062bn7A/viewform"
)
  .then((data) => {
    const jsonString = JSON.stringify(data, null, 2)
    fs.writeFileSync("src/GoogleForm.json", jsonString)
    console.log("GoogleForm.json has been updated.")
  })
  .catch((error) => {
    console.error("Error:", error)
  })
