/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import {
  WebChatCustomElement,
  setEnableDebug,
} from "@ibm-watson/assistant-web-chat-react";
// import { useEffect, useState } from "react";

interface WatsonProps {
  integrationID?: string;
  serviceInstanceID?: string;
}

// Include this if you want to get debugging information from this library. Note this is different than
// the web chat "debug: true" configuration option which enables debugging within web chat.
setEnableDebug(true);

export default function Watson({
  integrationID,
  serviceInstanceID,
}: WatsonProps) {
  //   const [integrationID, setIntegrationID] = useState(0);
  //   const [serviceInstanceID, setServiceInstanceID] = useState(0);
  //   useEffect(() => {
  //     setIntegrationID(process.env.integrationID);
  //     setServiceInstanceID(process.env.serviceInstanceID);
  //   }, []);
  const webChatOptions = {
    integrationID: integrationID,
    region: "eu-de",
    serviceInstanceID: serviceInstanceID,
    openChatByDefault: true,
    showLauncher: false,
    themeConfig: {
      corners: "round",
    },
    headerConfig: {
      hideMinimizeButton: true,
    },
    // subscriptionID: 'only on enterprise plans',
    // Note that there is no onLoad property here. The WebChatContainer component will override it.
    // Use the onBeforeRender or onAfterRender prop instead.
  };

  return (
    <WebChatCustomElement
      className="MyCustomElement"
      config={webChatOptions}
    />
  );
}
