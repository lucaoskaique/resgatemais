/* eslint-disable no-console */
const fs = require("fs")
const { googleFormsToJson } = require("react-google-forms-hooks")

googleFormsToJson(
  "https://docs.google.com/forms/d/1YTgu2H9icGvUrcqCwvNF1WIrmyjvyEC0YN5wlNiKDUU/viewform?edit_requested=true"
)
  .then((data) => {
    const jsonString = JSON.stringify(data, null, 2)
    fs.writeFileSync("src/GoogleForm.json", jsonString)
    console.log("GoogleForm.json has been updated.")
  })
  .catch((error) => {
    console.error("Error:", error)
  })
