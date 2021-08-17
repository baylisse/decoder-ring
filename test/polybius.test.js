const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("should properly encode a word", () => {
    const expected = "23513434112251";
    const actual = polybius("message");
    expect(actual).to.equal(expected);
  })
  it("should properly decode a word", () => {
    const expected = "message";
    const actual = polybius("23513434112251", false);
    expect(actual).to.equal(expected);
  })
  it("should return false if the number of characters in the string are odd when decoding, excluding spaces", () => {
    const expected = false;
    const actual = polybius('235134341122511', false);
    expect(actual).to.equal(expected);
  })
  it("should maintain spaces when encoding", () => {
    const expected = "23513434112251 23513434112251";
    const actual = polybius("message message");
    expect(actual).to.equal(expected);
  })
  it("should maintain spaces when decoding", () => {
    const expected = "message message";
    const actual = polybius('23513434112251 23513434112251', false);
    expect(actual).to.equal(expected);
  })
  it("should ignore capital letters", () => {
    const expected = '23513434112251';
    const actual = polybius("MESSAGE");
    expect(actual).to.equal(expected);
  })
  it("should convert both i and j to 42 when encoding", () => {
    const expected = "4242";
    const actual = polybius('ij');
    expect(actual).to.equal(expected);
  })
  it("should display both i and j when decoding", () => {
    const expected = "i/j"
    const actual = polybius("42", false);
    expect(actual).to.equal(expected);
  })
})