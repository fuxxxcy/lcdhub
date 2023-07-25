import dotenv from 'dotenv';

dotenv.config();

interface Config {
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
};

export const googleAPIConfig: Config = {
  project_id: process.env.project_id ?? "",
  private_key_id: process.env.private_key_id ?? "",
  private_key: process.env.private_key ?? "",
  client_email: process.env.client_email ?? "",
  client_id: process.env.client_id ?? "",
  auth_uri: process.env.auth_uri ?? "",
  token_uri: process.env.token_uri ?? "",
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url ?? "",
  client_x509_cert_url: process.env.client_x509_cert_url ?? "",
  universe_domain: process.env.universe_domain ?? ""
};
