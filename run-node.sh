export REALM="us1"
export OTEL_SERVICE_NAME="nodejs-example"
export OTEL_TRACES_EXPORTER="jaeger-thrift-splunk"
export OTEL_EXPORTER_JAEGER_ENDPOINT="https://ingest.${REALM}.signalfx.com/v2/trace"
export SPLUNK_ACCESS_TOKEN="<enter token here>"
export OTEL_RESOURCE_ATTRIBUTES='deployment.environment=nodejs-example'

node node_example.js