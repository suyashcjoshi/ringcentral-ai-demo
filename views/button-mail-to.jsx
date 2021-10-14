import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { Button} from 'react-bootstrap';

<Button onClick="sendMail">
    Send mail
  </Button>

const sendMail = () => {
    const mailto =
      "mailto:1057998913538@44466177.mvp.ringcentral.com?subject=Complaince Keywords&body=Body content";
    window.location.href = mailto;
  }

export default sendMail;