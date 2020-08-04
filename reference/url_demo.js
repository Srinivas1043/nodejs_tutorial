const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized url
console.log(myUrl.href);
console.log(myUrl.toString);

//Host or Domain (takes the port number)
console.log(myUrl.host);


//Host name (does not get the port number)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);


//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//get each params from the url
console.log(myUrl.searchParams.get('id'));

//get search params keys
console.log(myUrl.searchParams.keys());

//Loop throught the params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});