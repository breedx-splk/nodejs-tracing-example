#!/bin/sh

export OTEL_SERVICE_NAME="nodejs-example"
#export OTEL_TRACES_EXPORTER="otlp"
#export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318
export OTEL_RESOURCE_ATTRIBUTES='deployment.environment.name=jjp-dev'
export OTEL_LOG_LEVEL="DEBUG"

export SPLUNK_SNAPSHOT_PROFILER_ENABLED=true
#export SPLUNK_SNAPSHOT_SELECTION_RATE=0.1
export SPLUNK_SNAPSHOT_SELECTION_RATE=1.0

node -r @splunk/otel/instrument express_hello.js | tee out.txt
