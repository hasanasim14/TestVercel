import { Inter } from "next/font/google";
import {
  ClerkProvider,
  // SignedIn,
  // SignedOut,
  // SignInButton,
  // UserButton,
} from "@clerk/nextjs";
// import FloatingDockWrapper from "./FloatingDockWrapper";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hera Leads",
  description: "Manage All Clients in One Place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body
          className={`${inter.className}`}
          // style={{ backgroundColor: "#171717" }}
        >
          {/* <header className="flex justify-between items-center p-4"> */}
          {/* Sign in header, take the time out to fix this, no judgar */}
          {/* <div>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div> */}
          {/* </header> */}
          {/* <ProtectedContent> */}
          <main className="flex-1 overflow-auto main-content">{children}</main>
          {/* <FloatingDockWrapper /> */}
          {/* </ProtectedContent> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
