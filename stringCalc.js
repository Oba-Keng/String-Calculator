function add(string) {
  //returns zero if no string is entered
  if (string == "") {
    return 0;
  }
  //regular expression for delimeters
  let regex = /\d{1,5}/gm;

  let number = string.match(regex);

  let lastResult = 0;
  //condition for negative numbers added
  if (string.includes("-")) throw new Error("negatives not allowed");
  //numbers greater than 1000 are ignored
  number.map((element, index) => {
    if (element >= 1001) {
      number.splice(index, 1);
    }
  });
  //returns the sum of the numbers added in a string
  for (let i = 0; i < number.length; i++) {
    lastResult += parseInt(number[i]);
  }
  return lastResult;
}

module.exports = add;
