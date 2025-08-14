const http = require('http');

const { trace, diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

const tracer = trace.getTracer('example-tracer');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const start = Date.now();
  while (Date.now() - start < 1000) {}
  tracer.startActiveSpan('outer', child => {
      console.log('  a child...');
      const start = Date.now();
      while (Date.now() - start < 1000) {}
      res.end('Hi, you silly goose!\n');
      child.end();
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
