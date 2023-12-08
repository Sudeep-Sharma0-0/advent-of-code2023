const fs = require("fs");

const wordNum = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
};
const words = Array.from(Object.keys(wordNum));

fs.readFile("./day1.txt", (err, data) => {
  data = data.toString().trim();

  const lines = data.split("\n");

  let calibration = 0;
  for (let line of lines) {
    let a = convertToDigits(line);
    console.log(a);
    const numbers = Array.from(line).map(char => {
      if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) return char;
      else return null;
    }).filter(char => char != null);

    calibration += Number.parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
  }
  console.log(calibration);
})

function convertToDigits(str) {

}
