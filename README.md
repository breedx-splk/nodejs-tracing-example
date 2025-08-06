# node-tracing-example
Unofficial example of how to use [Splunk's distribution of OpenTelemetry for nodejs](https://github.com/signalfx/splunk-otel-js).

# setup

First, clone this repo:

```
git clone git@github.com:breedx-splk/nodejs-tracing-example.git
cd nodejs-tracing-example
npm install
```

Assuming that you have a collector running and reachable
on localhost, things should just work out of the box.


You MAY customize your environment by editing `run-node.sh`
and adjusting the settings. By default, the configuration assumes
that data will be exported in OTLP to localhost.


```
vi run-node.js
```

Save the file.

# running

Just execute the script that you edited above:

```
./run-node.sh
```

The code will create a trace consisting of two spans every 1 second. Verbose debug logging is enabled by default,
so you should see traces being exported.

Press ^C to end the program.
