const crypto = require("crypto");

// breaking down to smaller functions for easier testing and readability of the code
// the small functions could in theory also be used elsewhere in the app, just need to export them
// function to create hash
export const hash = (data, algo, encoding) => {
  return crypto.createHash(algo).update(data).digest(encoding);
}

export const isString = value => {
  return typeof value === "string"
}

export const stringify = value => {
  return JSON.stringify(value)
}