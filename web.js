const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['L', 'R','F', 'T', 'R', 'L' , 'F','L', 'R'];
  
  // TODO add your implementation here to replace the random response
  {
  "_links": {
    "self": {
      "href": "http://34.132.232.194/india-e1770626-9800-4b33-aefb-198305d414a1"
    }
  },
  
  res.send(moves[Math.floor(Math.random() * moves.length)]);
});

app.listen(process.env.PORT || 8080);
