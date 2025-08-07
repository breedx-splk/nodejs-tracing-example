const { start } = require('@splunk/otel');
const { trace, diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG)

start({
    serviceName: 'nodejs-example',
});

const tracer = trace.getTracer('example-tracer');

setInterval(() => { 
    tracer.startActiveSpan('outer', outer => {
        console.log('Outer');
        setTimeout(() => {
            tracer.startActiveSpan('inner', inner => {
                console.log('Inner');
                setTimeout(() => { 
                    inner.end();
                    outer.end();    
                }, 100);
            });
        }, 100);
        
    });
}, 500);
