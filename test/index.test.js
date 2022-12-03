const add = require("../src/index");

test("adds 2 +1 to equal 3", () => {
  expect(add(2)).toEqual(3);
});