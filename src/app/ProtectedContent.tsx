// // // ProtectedContent.tsx
// // "use client";

// // import { RedirectToSignIn, useAuth } from "@clerk/nextjs";

// // export default function ProtectedContent({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   const { isSignedIn, isLoaded } = useAuth();

// //   // Wait until Clerk is fully loaded to determine if the user is signed in
// //   if (!isLoaded) return null;

// //   // If the user is not signed in, redirect them to a fixed sign-in URL
// //   if (!isSignedIn) {
// //     return <RedirectToSignIn redirectUrl="/sign-in" />;
// //   }

// //   // Otherwise, render the protected content
// //   return <>{children}</>;
// // }

// // ProtectedContent.tsx
// "use client";

// import { useAuth, SignIn } from "@clerk/nextjs";

// export default function ProtectedContent({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { isSignedIn, isLoaded } = useAuth();

//   if (!isLoaded) return null; // Wait until Clerk is fully loaded

//   if (!isSignedIn) {
//     return <SignIn />;
//   }

//   return <>{children}</>;
// }
