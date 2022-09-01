const { startTracing } = require('@splunk/otel');
const { trace, diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG)

startTracing({
    serviceName: 'nodejs-example',
});

const tracer = trace.getTracer('example-tracer');

setInterval(() => { 
    tracer.startActiveSpan('outer', outer => {
        console.log('Outer');
        tracer.startActiveSpan('inner', inner => {
            console.log('Inner');
            inner.end();
            outer.end();    
        });
    });
}, 1000);
