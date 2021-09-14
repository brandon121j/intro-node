const http = require('http');

const port = 3000;

// const server = http.createServer(function (request, response) {
//     response.end("hi, class");
// });

// const server = http.createServer(function (request, response) {
//     response.setHeader("Content-Type", "application/json");
//     response.end(JSON.stringify({ text: "hello classes thing person", numbers: [1, 2, 3] }))
// })

// server.listen(port);

// console.log(`Server is now up and running @ port: ${port}`)

const server = http.createServer(function (request, response) {
    console.log(request.url);

    if (request.url === "/games") {
        response.end("check back later for game details");
    } else {
        response.end()
    }
})

server.listen(port);
console.log(`Server is now up and running @ port: ${port}`);