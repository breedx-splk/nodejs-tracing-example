export REALM="lab0"
export OTEL_SERVICE_NAME="nodejs-example"
export OTEL_TRACES_EXPORTER="jaeger-thrift-splunk"
export OTEL_EXPORTER_JAEGER_ENDPOINT="https://ingest.${REALM}.signalfx.com/v2/trace"
# export SPLUNK_ACCESS_TOKEN="<enter here>"
export OTEL_RESOURCE_ATTRIBUTES='deployment.environment=nodejs-example'

node nodetest.js