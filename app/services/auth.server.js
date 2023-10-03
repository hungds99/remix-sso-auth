// app/services/auth.server.ts
import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import { env } from "~/common/environment";
import { sessionStorage } from "~/services/session.server";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
const authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new OAuth2Strategy(
    {
      authorizationURL: env.GOOGLE_AUTHORIZATION_URL,
      tokenURL: env.GOOGLE_TOKEN_URL,
      clientID: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      callbackURL: env.APP_URL + "/sso/callback",
      useBasicAuthenticationHeader: false, // defaults to false
    },
    async ({
      accessToken,
      refreshToken,
      extraParams,
      profile,
      context,
      request,
    }) => {
      // here you can use the params above to get the user and return it
      // what you do inside this and how you find the user is up to you
      console.log("Data from Google: ", {
        accessToken,
        refreshToken,
        extraParams,
        profile,
        context,
        request,
      });
      return profile;
      // return await getUser(
      //   accessToken,
      //   refreshToken,
      //   extraParams,
      //   profile,
      //   context,
      //   request
      // );
    }
  ),
  // this is optional, but if you setup more than one OAuth2 instance you will
  // need to set a custom name to each one
  "google-oauth2"
);

export default authenticator;
