import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export const config = {
  matcher: [
    "/user",
    "/map"
  ]
};
export default withMiddlewareAuthRequired();
