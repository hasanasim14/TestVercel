import { Inter } from "next/font/google";
import {
  ClerkProvider,
  // SignedIn,
  // SignedOut,
  // SignInButton,
  // UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import './globals.css';

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
      <html lang="en" className='dark'>
        <body
          className={`${inter.className} dark` }
          // style={{ backgroundColor: "#171717" }}
        >
          {/* <header className="flex justify-between items-center p-4"> */}
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
          <main className="flex-1 overflow-auto main-content">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
