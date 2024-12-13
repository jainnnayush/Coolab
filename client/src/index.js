import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { Configuration,  PublicClientApplication, EventType } from "@azure/msal-browser";
import ReactDOM from "react-dom";

import App from "./App";

const msalConfiguration= {
    // auth: {
    //   clientId:  "87321b14-13a6-442f-90ef-599eccac12b9",
    //   authority: "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c",
    //   redirectUri: "http://localhost:3000/callback",
    // }
    auth: {
      clientId:  "065b5507-519e-46ed-ab23-a724b23bf5dc",
      authority: "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c/oauth2/v2.0/authorize",
      redirectUri: "http://localhost:3000/",
    }
};

const pca = new PublicClientApplication(msalConfiguration);

pca.addEventCallback(event =>{
  if(event.eventType === EventType.LOGIN_SUCCESS){
    console.log("login success");
    pca.setActiveAccount(event.payload.account);
  }
})

const AppWithAuthentication = () => (
    <MsalProvider instance={pca}>
        <App />
    </MsalProvider>
);

ReactDOM.render(<AppWithAuthentication />, document.getElementById("root"));