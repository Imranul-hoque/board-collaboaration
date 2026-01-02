import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

export const config = {
  matcher: [
    // Run middleware on all routes EXCEPT static files and _next
    "/((?!.*\\..*|_next).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
