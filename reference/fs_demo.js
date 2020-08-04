const fs = require('fs');
const path = require('path');


//create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('Folder Created');
//     }
// });

//create and write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('File written to...');

//         fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello another World', err => {
//             if (err) {
//                 throw err;
//             } else {
//                 console.log('File written to...');
//             }
//         });
//     }
// });

//Read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data);
//     }
// });

//Rename a file
// fs.rename(path.join(__dirname, '/test', 'hello_world.txt'), path.join(__dirname, '/test', 'hello_world_again.txt'), err => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('File is renamed');

//     }
// });





fs.writeFile(path.join(__dirname, 'events_demo.js'), '', err => {
    if (err) {
        throw err;
    } else {
        console.log('file created..');
    }
});