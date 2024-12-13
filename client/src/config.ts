import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  // auth: {
  //   clientId:  "87321b14-13a6-442f-90ef-599eccac12b9",
  //   authority: "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c",
  //   redirectUri: "/home",
  // }
  auth: {
    clientId:  "065b5507-519e-46ed-ab23-a724b23bf5dc",
    authority: "https://login.microsoftonline.com/850aa78d-94e1-4bc6-9cf3-8c11b530701c/oauth2/v2.0/authorize",
    redirectUri: "http://localhost:3000/",
  }
}