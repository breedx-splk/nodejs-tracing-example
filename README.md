# node-tracing-example
Unofficial example of how to use [Splunk's distribution of OpenTelemetry for nodejs](https://github.com/signalfx/splunk-otel-js).

# setup

First, clone this repo:

```
git clone git@github.com:breedx-splk/nodejs-tracing-example.git
cd nodejs-tracing-example
npm install
```

Next, you MUST customize your environment by editing `run-node.sh`
and updating the first two lines. 

```
vi run-node.js
```

The first line must contain the realm that you want to send data to
(usually us0 or us1 or eu0), and the second line must contain a valid 
ingest token for that realm:

```
export REALM="us1"
export SPLUNK_ACCESS_TOKEN="<enter token here>"
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
