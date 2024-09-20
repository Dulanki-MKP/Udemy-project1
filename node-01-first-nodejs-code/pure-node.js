const http = require('http');

const server = http.createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    });

    request.on('end', () => {
        body = Buffer.concat(body).toString();
        let username = 'Unknown User';
        if(body) {
            username = body.split('=')[1];
        }
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h1>Hello ${username}!</h1>
            <form method="POST" action="/"><input type="text" name="username"><button type="submit">Submit</button></form>`);
        response.end();
    });
});

server.listen(3000);