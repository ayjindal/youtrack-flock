var Client = require('node-xmpp-client');
var ltx = require('ltx');
var https = require('https');
var request = require('request');
var config = require("./config.js").settings;

console.log("Initializing XMPP...");
var client = new Client(config.xmpp);

var sendToFlock = function(message) {
    request.post(
        config.flock.incoming_webhook_url, {
            json: {
                text: message
            }
        },
        function(error, response, body) {
            console.log("response status code = " + response.statusCode + ", message = " + response.statusMessage); 
            if (!error && response.statusCode == 200) {
                console.log("Successfully posted to Flock");
            }
        }
    );
}

client.on('online', function() {
    console.log('Connected to XMPP');
    client.send(new ltx.Element('presence', { })
            .c('show').t('chat').up());
});

client.on('error', function(message) {
    console.log("error: " + message);
    process.exit(1);
});

client.on('stanza', function(stanza) {
    console.log("stanza: " + stanza)
    if (stanza.is('message') &&
        (stanza.attrs.type !== 'error')) {
        var xmppPayload = ltx.parse(stanza.root().toString());
        var message = "";
        if (xmppPayload.getChild("body") != null) {
            message = xmppPayload.getChild("body").getText();
        }
        message = message.replace(config.filter, '');
        sendToFlock(message);
    }
});
