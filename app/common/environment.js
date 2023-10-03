export const env = {
  // HOST: process.env.HOST || "localhost",
  // PORT: process.env.PORT || 8000,
  // APP_URL:
  //   `http://${process.env.HOST}:${process.env.PORT}` ||
  //   "http://localhost:8000",
  APP_URL: process.env.SHOPIFY_APP_URL,
  GOOGLE_AUTHORIZATION_URL: process.env.GOOGLE_AUTHORIZATION_URL || "",
  GOOGLE_TOKEN_URL: process.env.GOOGLE_TOKEN_URL || "",
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
};
