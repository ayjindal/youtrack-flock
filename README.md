# YouTrack to Flock

This bot allows you to propagate Jabber notifications posted from YouTrack to Flock.  

##Steps to configure

1. Create an XMPP account for the YouTrack bot account using any Jabber server. I used [this](https://www.xmpp.jp/), for example.

2. Go to YouTrack `Profile` -> `General Settings` -> `Hub Profile`.

3. Set the `Jabber` field to the newly account that you created in step 1. Click on `Verify` and verify the Jabber account from YouTrack.

4. Enable Jabber notifications from YouTrack admin settings.

5. Add the settings for username `jid`, server hostname `host` and `password` in `config.js` file. 

6. Create an Incoming Webhook for Flock as prescribed [here](https://dev.flock.co/wiki/display/FlockAPI/Incoming+Webhook+-+Configuration) and take a note of the webhook url. 

7. Set the `incoming_webhook_url` field in `config.js` to match the webhook url created in the previous step.

## Run

1. npm install 

2. npm start

That's it! All your YouTrack notifications would be received on Flock.
 
