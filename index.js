 const http = require('http');
 const path = require('path');
 const fs = require('fs');

 const server = http.createServer((req, res) => {
     //console.log(req.url);
     //  if (req.url == '/') {

     //      fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
     //          if (err) {
     //              throw err
     //          } else {
     //              res.writeHead(200, { 'Content-Type': 'text/html' });
     //              res.end(content);
     //          }
     //      });
     //  }


     //  if (req.url == '/about') {

     //      fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
     //          if (err) {
     //              throw err
     //          } else {
     //              res.writeHead(200, { 'Content-Type': 'text/html' });
     //              res.end(content);
     //          }
     //      });
     //  }


     //  if (req.url == '/api/users') {

     //      const users = [{
     //              name: 'Srinivas',
     //              age: 24
     //          },
     //          {
     //              name: 'Srivatsan',
     //              age: 28
     //          }
     //      ];

     //      res.writeHead(200, { 'Content-Type': 'application/json' });
     //      res.end(JSON.stringify(users));


     //  }

     //Build file path dynamic
     let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);


     //Extension of the file
     let extname = path.extname(filepath);

     //Init content type

     let contenttype = 'text/html';

     //check ext and set content type

     switch (extname) {
         case '.js':
             contenttype = 'text/javascript';
             break;
         case '.css':
             contenttype = 'text/css';
             break;
         case '.json':
             contenttype = 'application/json';
             break;
         case '.png':
             contenttype = 'image/png';
             break;
         case '.jpg':
             contenttype = 'image/jpg';
             break;
     }



     //Read File
     fs.readFile(filepath, (err, content) => {
         if (err) {
             if (err.code = 'ENOENT') {
                 //Page Not Found
                 fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                     res.writeHead(200, { 'Content-Type': 'text/html' });
                     res.end(content, 'utf8');
                 });
             } else {
                 //Some server error
                 res.writeHead(500);
                 res.end(`Server Error: ${err.code}`);
             }
         } else {
             //Success
             res.writeHead(200, { 'Content-Type': contenttype });
             res.end(content, 'utf8');
         }
     });


 });

 const PORT = process.env.PORT || 5000;



 server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));