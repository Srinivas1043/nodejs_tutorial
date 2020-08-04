const path = require('path');

//basename -- gets the base file
console.log(__filename, '....', path.basename(__filename));


//directory name
console.log(path.dirname(__filename));
//extension file
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))