#!/bin/sh

export OTEL_SERVICE_NAME="nodejs-example"
#export OTEL_TRACES_EXPORTER="otlp"
#export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318
export OTEL_RESOURCE_ATTRIBUTES='deployment.environment=nodejs-example'
export OTEL_LOG_LEVEL="DEBUG"

node node_example.js