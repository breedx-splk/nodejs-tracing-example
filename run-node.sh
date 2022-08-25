export REALM="us1"
export SPLUNK_ACCESS_TOKEN="<enter token here>"

export OTEL_SERVICE_NAME="nodejs-example"
export OTEL_TRACES_EXPORTER="jaeger-thrift-splunk"
export OTEL_EXPORTER_JAEGER_ENDPOINT="https://ingest.${REALM}.signalfx.com/v2/trace"
export OTEL_RESOURCE_ATTRIBUTES='environment=nodejs-example'
export OTEL_LOG_LEVEL="DEBUG"

node node_example.js