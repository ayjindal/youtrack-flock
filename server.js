var Client = require('node-xmpp-client');
var ltx = require('ltx');
var config = require("./config.js").settings;

console.log("Initializing XMPP...");
var client = new Client(config.xmpp);

client.on('online', function() {
    console.log('Connected to XMPP');
    client.send(new ltx.Element('presence', { })
            .c('show').t('chat').up());
});

client.on('error', function(message) {
    console.log("error: " + message);
    process.exit(1);
});
