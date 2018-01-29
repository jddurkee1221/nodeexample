const path = require("path");
const fs = require("fs");

let dataPath = path.join(__dirname, "../data.json");

let arrayChirp = [
  {
    author: "John Durkee",
    chirp: "Can you believe this weather today"
  },

  {
    author: "Old Person",
    chirp: "What is this thing they call chirper"
  },

  {
    author: "John Durkee",
    chirp: "I am still the only one using this"
  },
  {
    author: "John Durkee",
    chirp: "blah blah"
  },
  {
    author: "John Durkee",
    chirp: "Hello World!"
  }
];
let chirps = JSON.stringify(arrayChirp);
fs.writeFile(dataPath, chirps, err => {
  if (err) console.log(err);
});

fs.readFile(
  chirps,
  {
    encoding: "UTF-8"
  },
  (err, data) => {
    chirp = chirps.json;
    console.log(chirps);
  }
);
