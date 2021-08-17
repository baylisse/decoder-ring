const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if the shift value is not present", () => {
    expect(caesar("banana")).to.equal(false);
  });
  it("should return false if the shift value is 0", () => {
    expect(caesar("banana"), 0).to.equal(false);
  });
  it("should return false if the shift value is less than -25", () => {
    expect(caesar("banana"), -30).to.equal(false);
  });
  it("should return false if the shift value is greater than 25", () => {
    expect(caesar("banana"), 30).to.equal(false);
  });
  it("spaces and special characters should be maintained throughout", () => {
    const actual = caesar("banana & mango", 2);
    const expected = "dcpcpc & ocpiq";
    expect(actual).to.equal(expected);
  });
  it("capital letters should be ignored", () => {
    const actual = caesar("banana", 2);
    const expected = "dcpcpc";
    expect(actual).to.equal(expected);
  });
  it("should loop to the beginning of the alphabet if the switch goes past z", () => {
    const actual = caesar("z", 2);
    const expected = "b";
    expect(actual).to.equal(expected);
  });
});
