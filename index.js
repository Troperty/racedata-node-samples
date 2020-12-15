const Stomp = require('stompjs');
const WebSocket = require('ws');

// Settings for connecting to local simulator
// See https://hub.docker.com/r/troperty/customerapi-broker-simulator
const wsUrl = 'ws://localhost:8080/api/v1/channels/connect';
const subscribeUrl = '/api/v1/channels/user/topic/publish';

// Hard coded token for the simulator. For production, authToken should
// be received from a call to the authentication endpoint.
const authToken = 'dGVzdHVzZXI=';

// stompClient is connected and authenticated to the STOMP server
const onConnected = () => {
  console.log(`Connected to ${wsUrl}...`);
  
  //subsribe in order to get messages from the server
  stompClient.subscribe(subscribeUrl, onMessage);
};

// Connection error
const onConnectionError = (error) => {
  console.log(JSON.stringify(error, null, 4));
};

// Receive a STOMP message from the server
const onMessage = (message) => {
  if (message.body) {
    const data = JSON.parse(message.body);
    console.log(data.payload);
  } else {
    console.log('Received empty message');
  }
};

const ws = new WebSocket(wsUrl, null, {
  headers: {
    authorization: `Bearer ${authToken}`
  }
});

const stompClient = Stomp.over(ws);
stompClient.connect({}, onConnected, onConnectionError);
