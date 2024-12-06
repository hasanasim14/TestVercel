import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  // matcher: [
  //   // Skip Next.js internals and all static files
  //   '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  //   // Always run for API routes
  //   '/(api|trpc)(.*)',
  // ],

  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:html|css|js|json|jpg|jpeg|png|gif|svg|ttf|woff|woff2|ico|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
  
};
