import { json } from "@remix-run/node";
import authenticator from "~/services/auth.server";

export async function loader({ request }) {
  const user = await authenticator.isAuthenticated(request);

  console.log("User :", user);

  return json(
    {
      message: "You are now logged in!",
    },
    {
      headers: {
        "Set-Cookie":
          "_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
      },
    }
  );
}
