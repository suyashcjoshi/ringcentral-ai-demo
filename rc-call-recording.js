const RCSDK = require('@ringcentral/sdk').SDK

RINGCENTRAL_CLIENTID = ""; // provide your application client ID (production/sandbox credential)
RINGCENTRAL_CLIENTSECRET = ""; // provide your application client ID (production/sandbox credential)
RINGCENTRAL_SERVER = 'https://platform.ringcentral.com' // you can use sandbox URL as well

RINGCENTRAL_USERNAME = ""; // provide your username (production/sandbox enviornment)
RINGCENTRAL_PASSWORD = ""; // provide your password (production/sandbox credential)
RINGCENTRAL_EXTENSION = ""; // provide your extension or leave blank (production/sandbox credential)

const rcsdk = new RCSDK({
  server: RINGCENTRAL_SERVER,
  clientId: RINGCENTRAL_CLIENTID,
  clientSecret: RINGCENTRAL_CLIENTSECRET
});

const platform = rcsdk.platform();

let startDate = new Date(); // it's set to current date, you should change this to a previous date
let dateFrom = startDate.toISOString();
let startTime = dateFrom.replace('/', ':');

let stopDate = new Date();
let dateTo = stopDate.toISOString();
let stopTime = dateTo.replace('/', ':');

var endpoint = '/restapi/v1.0/account/~/extension/'+ '~' +'/call-log';
var params = {};
params['dateFrom'] = startTime;
params['dateTo'] = stopTime;
params['recordingType'] = 'All';


platform.login({
  username: RINGCENTRAL_USERNAME,
  password: RINGCENTRAL_PASSWORD,
  extension: RINGCENTRAL_EXTENSION
}).then(() => {
  platform.get(endpoint, params)
  .then(function(resp){
    async.each(resp.json().records,
      function(record, callback){
        console.log("THIS CALL HAS A RECORDING: " + record.recording.contentUri)
        saveAudioFile(record)
      },
      function(err){
        console.log("No call with call recording within this period of time.")
      }
    );
  })
  .catch(function(e){
    var err = e.toString();
    console.log(err);
  })
});

function readExtensionCallLogs(RINGCENTRAL_EXTENSION, startTime, stopTime) {
    platform.get(endpoint, params)
    .then(function(resp){
      async.each(resp.json().records,
        function(record, callback){
          console.log("THIS CALL HAS A RECORDING: " + record.recording.contentUri)
          saveAudioFile(record)
        },
        function(err){
          console.log("No call with call recording within this period of time.")
        }
      );
    })
    .catch(function(e){
      var err = e.toString();
      console.log(err);
    })
  }
  
  function saveAudioFile(record){
    platform.get(record.recording.contentUri)
    .then(function(res) {
      return res.response().buffer();
    })
    .then(function(buffer) {
      var destFile = './recordings/' + record.recording.id + '.mp3';
      fs.writeFileSync(destFile, buffer);
      console.log("CALL RECORDING SAVED AT: " + destFile);
    })
    .catch(function(e){
      console.log(e);
    })
  }