import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(request: Request) {
  console.log("Middleware working");
});

export const config = {
  matcher: ["/issues/new"],
};
