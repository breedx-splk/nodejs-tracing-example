export REALM="us1"
export SPLUNK_ACCESS_TOKEN="<enter token here>"


export OTEL_SERVICE_NAME="nodejs-example"
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_RESOURCE_ATTRIBUTES='deployment.environment=nodejs-example'
export OTEL_LOG_LEVEL="DEBUG"

node node_example.js