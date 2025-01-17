const http = require('http');

const requestListener = function (req, res) {
  try {
    // Simulate an error (replace with your actual request handling logic)
    const result = someFunctionThatMightThrowAnError();
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500);
    res.end('Internal Server Error');
  }
};

function someFunctionThatMightThrowAnError(){
  throw new Error('Simulated error');
}

const server = http.createServer(requestListener);

server.on('error', (err) => {
    console.error('Server Error', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});