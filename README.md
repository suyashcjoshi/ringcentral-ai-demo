<h1 align="center" style="border-bottom: none;">🎤 Speech to Text Demo </h1>
<h3 align="center">Node.js sample applications that shows some of the the IBM Watson Speech to Text service features.</h3>
<p align="center">
  <a href="http://travis-ci.org/watson-developer-cloud/speech-to-text-nodejs">
    <img alt="Travis" src="https://travis-ci.org/watson-developer-cloud/speech-to-text-nodejs.svg?branch=master">
  </a>
  <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>
</p>

The [Speech to Text][service_url] service uses IBM's speech recognition capabilities to convert speech in multiple languages into text. The transcription of incoming audio is continuously sent back to the client with minimal delay, and it is corrected as more speech is heard. The service is accessed via a WebSocket interface; a REST HTTP interface is also available;

You can view a [demo][demo_url] of this app.

## Prerequisites

RingCentral


1. Create an application on RingCentral

- Login or create an account if you have not done so already.
- Go to Console/Apps and click 'Create App' button.
- Select "REST API App (most common)" under "What type of app are you creating?"
- Provide App Name, Primary Contact Name.
- For "Do you intend to promote this app in the RingCentral App Gallery? (for internal-use only)", choose 'No' if you're creating just for learning purpose.
- Auth : Choose 'Password-based auth flow' for this demo app.
- 'Issue Refresh token' : Choose 'Yes'
- Then select the following Application permissions:
Meetings, Read Call Log, Read Call Recording
- Click 'Create' and your application will be created

2. Getting RingCentral Data

## Steps for RingCentral Video (rcv.js) API

- You will need to use RingCentral Video API, currently that is in 'early access beta' so sign up here for requesting access to the same
- Once you have access, login to App Console and paste the credentials in rcv.js file
- We will call the Meeting History API to get the meeting logs and media content URI
- Finally, we will download the actual meeting recording  and then make another call to download the media content from RingCentral server. For more information refer here

Note: If you're using RingCentral Meeting API, refer to this page https://developers.ringcentral.com/api-reference/Call-Recordings/readCallRecording

```
    npm install
    node rc-call-recordings.js
```

## RingCentral Call Recording API

3. RingCentral Call Recording API

```
    npm install
    node rc-call-recordings.js
```


IBM

1. You need an [IBM Cloud account](https://cloud.ibm.com/registration/).
1. Download the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#overview).
1. Create an instance of the Speech to Text service and get your credentials:
    - Go to the [Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) page in the IBM Cloud Catalog.
    - Log in to your IBM Cloud account.
    - Click **Create**.
    - Click **Show** to view the service credentials.
    - Copy the `apikey` value.
    - Copy the `url` value.

## Configuring the application

1. In the application folder, copy the *.env.example* file and create a file called *.env*

    ```
    cp .env.example .env
    ```

2. Open the *.env* file and add the service credentials that you obtained in the previous step.

    Example *.env* file that configures the `apikey` and `url` for a Speech to Text service instance hosted in the US East region:

    ```
    SPEECH_TO_TEXT_IAM_APIKEY=X4rbi8vwZmKpXfowaS3GAsA7vdy17Qh7km5D6EzKLHL2
    SPEECH_TO_TEXT_URL=https://api.us-east.speech-to-text.watson.cloud.ibm.com
    ```

## Running locally

1. Install the dependencies

    ```
    npm install
    ```
Get the data

1. Run the rcv.js to get RingCentral Video Meeting Data

    ```
    npm start
    ```

1. Run the rc-call-recording.js to get RingCentral Call Data

    ```
    npm start
    ```

1. Run the AI Webapp
    ```
    npm start
    ```

1. View the application in a browser at `localhost:3000`


## Credits:

### IBM Watson orignal Sppech to Text App and resources
[demo_url]: https://speech-to-text-demo.ng.bluemix.net
[service_url]: https://www.ibm.com/cloud/watson-speech-to-text
[docs]: https://cloud.ibm.com/apidocs/speech-to-text
[sign_up]: https://cloud.ibm.com/registration/?target=/catalog/services/speech-to-text/

## Support

- Open pull request
- Ask question related to this demo on RingCentral Developer Forum