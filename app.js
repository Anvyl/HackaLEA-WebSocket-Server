const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        wss.clients.forEach(function (client) {
            if(client.isServer){
                console.log("Server found");
            }
            if (client.readyState === WebSocket.OPEN && !client.isServer) {
               client.send(message.toString());
            }
        });
    });
});