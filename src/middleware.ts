<<<<<<< HEAD
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
=======
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
<<<<<<< HEAD
  "/demo", // Exclude validation for this route
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});
=======
])

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect()
  }
})
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
<<<<<<< HEAD
};
=======
}
>>>>>>> 3cf77f1a6222f6eb12d9995ae36d28b27e65b4e8
