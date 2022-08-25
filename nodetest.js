const { startTracing } = require('@splunk/otel');
const { trace } = require('@opentelemetry/api');

startTracing({
    serviceName: 'nodejs-example-service',
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
}, 2500)


