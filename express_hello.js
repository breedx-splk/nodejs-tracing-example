const http = require('http');

const { trace, diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

const tracer = trace.getTracer('example-tracer');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  setTimeout(() => { 
    tracer.startActiveSpan('outer', child => {
      console.log('  a child...');
      setTimeout(() => { 
        res.end('Hi, you silly goose!\n');
        child.end();
      }, 100);
    });
  }, 100);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});