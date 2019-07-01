const add = require("../stringCalc");

describe("a string calculator that", function() {
  it("returns 0 for an empty string", function() {
    expect(add("")).toEqual(0);
  });
  it("takes in a single number", function() {
    expect(add("1")).toEqual(1);
  });
  it("returns the sum of multiple numbers", function() {
    expect(add("25,30,89,37,4")).toEqual(185);
  });
  it("handles new lines between numbers", function() {
    expect(add("35/n25,23")).toEqual(83);
  });
  it("supports different delimeters", function() {
    expect(add("//;\n1;2")).toEqual(3);
  });
  it("negatives not allowed", function() {
    expect(function() {
      add("-35\n23");
    }).toThrow(new Error("negatives not allowed"));
  });
  it("numbers greater than 1000 are ignore", function() {
    expect(add("1001\n23")).toEqual(23);
  });
  it("allows delimeters to be any length", function() {
    expect(add("//[***]\n10***5***6")).toEqual(21);
  });
  it("allows multiple delimeters", function() {
    expect(add("//[*][%]\n15*60%3")).toEqual(78);
  });
  it("allows multiple delimeters with length longer than one character", function() {
    expect(add("//[*][%]\n22()*60%73")).toEqual(155);
  });
});
