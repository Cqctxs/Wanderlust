import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export const config = {
  matcher: [
    "/user",
    "/"
  ]
};
export default withMiddlewareAuthRequired();
