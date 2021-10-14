const RCSDK = require('@ringcentral/sdk').SDK
const open = require('open');

RINGCENTRAL_CLIENTID = ""; // provide your application client ID (production credential)
RINGCENTRAL_CLIENTSECRET = ""; // provide your application client ID (production credential)
RINGCENTRAL_SERVER = 'https://platform.ringcentral.com' // production URL

RINGCENTRAL_USERNAME = ""; // provide your username (production' enviornment)
RINGCENTRAL_PASSWORD = ""; // provide your password (production credential)
RINGCENTRAL_EXTENSION = ""; // provide your extension or leave blank (production credential)

const rcsdk = new RCSDK({
  server: RINGCENTRAL_SERVER,
  clientId: RINGCENTRAL_CLIENTID,
  clientSecret: RINGCENTRAL_CLIENTSECRET
});

const platform = rcsdk.platform();

platform.login({
  username: RINGCENTRAL_USERNAME,
  password: RINGCENTRAL_PASSWORD,
  extension: RINGCENTRAL_EXTENSION
}).then(() => { 
    platform.get('/rcvideo/v1/history/meetings',{})
      .then(response => response.json())
      .then(response => {
        let meetingsObject = response.meetings;
        downloadURL(meetingsObject);
    })
  })

async function getAccessToken() {
  let authData = await rcsdk.platform().auth().data();
  return authData.access_token;
}

async function downloadURL(meetingsObject) {
  let access_token = getAccessToken();
  for (var meetings of meetingsObject) {
    if (meetings.recordings.length > 0) {
      let testRecordingURL = meetings.recordings[0].url + "?access_token=" + access_token;
      console.log(testRecordingURL);
      open(testRecordingURL);
    }
  }
}
