import { hash, isString, stringify } from "./helpers";
const crypto = require("crypto");


describe("hash", () => {
    it("Returns the hashed value", () => {
      const data = {partitionKey: "1"}
      const trivialKey = hash(stringify(stringify(data)), "sha3-512", "hex");
      const compareTo = crypto.createHash("sha3-512").update(data).digest("hex")

      expect(trivialKey).toBe(compareTo);
    });
  });
  
  describe("stringify", () => {
    it("Returns the stringified version", () => {
      const data = { partitionKey : 1 }; 
      const trivialKey = stringify(data);
      expect(trivialKey).toBe('{"partitionKey":1}');
    });
  });
  
  describe("isString", () => {
    it("Returns true if input is a string", () => {
      const data = "This is not a string"; 
      const trivialKey = isString(data);
      expect(trivialKey).toBe(true);
    });
    it("Returns false if input is a number", () => {
      const data = 3.14; 
      const trivialKey = isString(data);
      expect(trivialKey).toBe(false);
    });
    it("Returns false if input is an array", () => {
      const data = [1, 2, 3, 4, 5]; 
      const trivialKey = isString(data);
      expect(trivialKey).toBe(false);
    });
  });