"use client";

import '../app/globals.css'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlipWords } from "@/components/ui/flip-words";
import { Briefcase, Users, BarChart, Shield } from "lucide-react";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const words = ["Clients", "Partners", "Customers", "Referrals"];
  const { isSignedIn } = useUser();
  const router = useRouter();



  
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname === 'lawyer.addfutr.com') {
        router.push('/adli-landing');
        return;
      }
    }
  }, [router]);

  return (
    <>
      <ClerkProvider>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <section className="relative h-[70vh] flex items-center justify-center">
              <Image
                src="/gavels.jpg"
                alt="gavel"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />

              <div className="relative z-10 text-center text-white !important space-y-6 max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Objection Overruled:
                  <br />
                  <span className="inline">
                    Your <FlipWords words={words} className="text-white" />
                  </span>
                  <br />
                  Are Waiting
                </h1>
                <p className="text-xl md:text-2xl">
                  Connect with potential clients and grow your practice with
                  Hera Leads
                </p>
                {!isSignedIn ? (
                  <Button size="lg" asChild className="getStartedButton">
                    <Link href="/sign-in">Get Started</Link>
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Why Choose Hera Leads?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Briefcase,
                      title: "Expand Your Practice",
                      description:
                        "Connect with clients seeking your expertise",
                    },
                    {
                      icon: Users,
                      title: "Network Growth",
                      description:
                        "Build relationships with other legal professionals",
                    },
                    {
                      icon: BarChart,
                      title: "Insightful Analytics",
                      description:
                        "Track your performance and client engagement",
                    },
                    {
                      icon: Shield,
                      title: "Secure Platform",
                      description:
                        "Your data and client information are protected",
                    },
                  ].map((feature, index) => (
                    <Card key={index} style={{ backgroundColor: "#1D232C" }}>
                      <CardContent className="p-6 text-center">
                        <feature.icon className="w-12 h-12 mx-auto mb-4 text-white" />
                        <h3 className="text-xl font-semibold mb-2 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Grow Your Legal Practice?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join Hera Leads today and start connecting with potential clients
                  who need your expertise.
                </p>
              </div>
            </section>
          </main>

          <footer className="bg-background border-t py-8">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
              <p>
                &copy; {new Date().getFullYear()} Hera Leads. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </ClerkProvider>
    </>
  );
}
