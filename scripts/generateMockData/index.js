/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

// Helper tool for creating schema: https://json-schema-faker.js.org/

var jsf = require("json-schema-faker")
var mockDataSchema = require("./mockDataSchema.json")
var fs = require("fs")

jsf.extend("faker", () => require("faker"))

var json = JSON.stringify(jsf.generate(mockDataSchema))

fs.writeFile("./db.json", json, function (err) {
  if (err) {
    return console.log(err)
  } else {
    console.log("Mock data generated.")
  }
})
