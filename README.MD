# Race Data Node Samples

Node.js samples for accessing race data from Svensk Travsport and Svensk Galopp through the Race Data API.


## Getting started

##### Start API simulator
```bash
# Start the API simulator in a Docker container
docker run -d -p 8080:8080 troperty/customerapi-broker-simulator
```

##### Clone repository and install dependencies
```bash
# Clone code from git
git clone git@github.com:troperty/racedata-node-samples.git
cd racedata-node-samples

# Install dependencies
npm install
```

### WebSockets

##### Listen to messages through WebSocket
```bash
# Start listening
npm start
```

##### Send WebSocket messages through Simulator
```bash
curl -X POST http://localhost:8080/customerapi/channel/id/NonDurable \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '<xml>Hello, world!</xml>' \
  -v
```
