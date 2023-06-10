const express = require('express');
const app = express();
const fs = require('fs');
var msg;


fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  msg=data;
});

app.get('/', (req, res) => {
    res.send(msg);
  });

  const filePath = 'input.txt';
if (fs.existsSync(filePath)) {
  console.log(`${filePath} exists.`);
} else {
  console.log(`${filePath} does not exist.`);
}

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });


