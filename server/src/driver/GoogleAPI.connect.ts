import { googleAPIConfig } from "./GoogleAPI.config";
import { google } from "googleapis";
import { JWT, JWTOptions } from "google-auth-library";

const scopes = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/drive.appdata',
  'https://www.googleapis.com/auth/drive.file',
];

const options: JWTOptions = {
  email: googleAPIConfig.client_email,
  key: googleAPIConfig.private_key,
  scopes,
  keyId: googleAPIConfig.private_key_id
};

export const authJWT: JWT = new google.auth.JWT(options);
