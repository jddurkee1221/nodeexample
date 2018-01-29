let path = require("path");
let fs = require("fs");
let request = require("request");

let array = [];

let dataPath = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/popular.json", (err, response, body) => {
  if (err) console.log(err);

  JSON.parse(body).data.children.forEach(item => {
    array.push({
      title: item.data.title,
      url: item.data.url,
      author: item.data.author
    });
    let newArray = JSON.stringify(array);

    fs.writeFile(dataPath, newArray, error => {
      if (error) console.log(error);
    });
  });
});
