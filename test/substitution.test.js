const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  it("should properly encode a message", () => {
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = 'jrufscpw';
    const actual = substitution("thinkful", alphabet);
    expect(actual).to.equal(expected);
  })
  it("should properly decode a message", () => {
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "thinkful";
    const actual = substitution('jrufscpw', alphabet, false);
    expect(actual).to.equal(expected);
  })
  it("should work with spaces", () => {
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution("You are an excellent spy", alphabet);
    expect(actual).to.equal(expected);
  })
  it("should work with special characters in the given alphabet", () => {
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&";
    const actual = substitution("message", alphabet);
    expect(actual).to.equal(expected);
  })
  it("should ignore capital letters", () => {
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&";
    const actual = substitution("MESSAGE", alphabet);
    expect(actual).to.equal(expected);
  })
  it("should return false if the given alphabet does not have 26 characters", () => {
    const alphabet = "$wae&zrdxtfcygvuhbijnokmp";
    const expected = false;
    const actual = substitution("message", alphabet);
    expect(actual).to.equal(expected);
  })
  it("should return false if the alphabet is not given", () => {
    const expected = false;
    const actual = substitution("message");
    expect(actual).to.equal(expected);
  })
  it("should return false if the given alphabet contains duplicates", () => {
    const alphabet = "$wae&zrdxtfcygvuhbijnokpp";
    const expected = false;
    const actual = substitution("message", alphabet);
    expect(actual).to.equal(expected);
  })
})
