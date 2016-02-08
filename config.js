exports.settings = {
    "filter": /You can apply a command[\s\S]+for more details./mg,    
    "xmpp": {
        jid: 'ayush.j@xmpp.jp',
        host: 'xmpp.jp',
        password: <password>,
        reconnect: true
    },
    "flock": {
        incoming_webhook_url: 'https://api.flock.co/hooks/sendMessage/<token>'
    }
};
