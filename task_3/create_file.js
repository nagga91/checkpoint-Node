const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.readFile('hello.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });