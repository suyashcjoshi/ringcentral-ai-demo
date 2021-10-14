<h2 align="center" style="border-bottom: none;">🎤 AI Demo </h2>
<h3 align="center">Node.js sample applications that shows IBM Watson Speech to Text service with RingCentral Data.</h3>


## Prerequisites

### Configure RingCentral


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

2. Install RingCentral SDK and other dependencies

```
git clone https://github.com/suyashjoshi/ringcentral-ai-demo
npm install
```

## Configure RingCentral Video (rcv.js) API

- You will need to use RingCentral Video API, currently that is in 'early access beta' so sign up here for requesting access to the same
- Once you have access, login to App Console and paste the credentials in rcv.js file
- We will call the Meeting History API to get the meeting logs and media content URI
- Finally, we will download the actual meeting recording  and then make another call to download the media content from RingCentral server. For more information refer here

Note: If you're using RingCentral Meeting API, refer to this page https://developers.ringcentral.com/api-reference/Call-Recordings/readCallRecording

```
    npm install
    node rc-call-recordings.js
```

## Configure RingCentral Call Recording API

3. RingCentral Call Recording API

```
    npm install
    node rc-call-recordings.js
```


## Configure IBM

1. You need an [IBM Cloud account](https://cloud.ibm.com/registration/).
2. Download the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#overview).
3. Create an instance of the Speech to Text service and get your credentials:
    - Go to the [Speech to Text](https://cloud.ibm.com/catalog/services/speech-to-text) page in the IBM Cloud Catalog.
    - Log in to your IBM Cloud account.
    - Click **Create**.
    - Click **Show** to view the service credentials.
    - Copy the `apikey` value.
    - Copy the `url` value.

4. In the application folder, copy the *.env.example* file and create a file called *.env*

    ```
    cp .env.example .env
    ```

5. Open the *.env* file and add the service credentials that you obtained in the previous step.

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

2. Run the rcv.js to get RingCentral Video Meeting Data

    ```
    node rcv.js
    ```

1. Run the rc-call-recording.js to get RingCentral Call Data

    ```
    node rc-call-recordings.js
    ```

1. Run the AI Webapp
    ```
    npm start
    ```

1. View the application in a browser at `localhost:3000`


## Credits:

#### IBM Watson orignal Sppech to Text App and resources
[demo_url]: https://speech-to-text-demo.ng.bluemix.net
[service_url]: https://www.ibm.com/cloud/watson-speech-to-text
[docs]: https://cloud.ibm.com/apidocs/speech-to-text
[sign_up]: https://cloud.ibm.com/registration/?target=/catalog/services/speech-to-text/

## Support

- Open pull request with any questions/issues/errors
- Ask question related to this demo on [RingCentral Developer Forum](https://developers.ringcentral.com/community.html)
