const fs = require("fs");

function partOne(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    data = data.trimEnd();

    let cards = data.split("\n");
    let sections = cards.map(item => item.split(":")[1].trim());

    let totalPoints = 0;
    for (let section of sections) {
      let [winningNums, ownedNums] = section.split("|").map(item => item.trim());
      [winningNums, ownedNums] = [winningNums.split(/\s+/), ownedNums.split(/\s+/)];

      matchedNums = ownedNums.filter(num => winningNums.includes(num));
      let points = 0;
      if (matchedNums.length > 0) points = 1;

      for (let i = 0; i < matchedNums.length - 1; i++) {
        points *= 2;
      }
      totalPoints += points;
      console.log(matchedNums);
    }
    console.log(totalPoints);
  })
}

partOne("./day4.txt");
