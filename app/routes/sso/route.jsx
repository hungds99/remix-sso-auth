import authenticator from "~/services/auth.server";

export async function loader({ request }) {
  return authenticator.authenticate("google-oauth2", request, {
    successRedirect: "/sso/callback",
  });
}
