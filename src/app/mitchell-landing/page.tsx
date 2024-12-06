"use client";

// import "@/app/globals.css"
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
// import { Button } from "../../components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  MapPin,
  Mail,
  Phone,
  Printer,
  Scale,
  FileText,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DualTimeline from "../../components/DualTimeline";

interface MitchellLandingPageProps {
  isDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Component() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MitchellLandingPage
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </Suspense>
  );
}

function MitchellLandingPage({
  isDialogOpen,
  setIsDialogOpen,
}: MitchellLandingPageProps) {
  const searchParams = useSearchParams();
  const lead_id = searchParams.get("lead_id") || "";

  useEffect(() => {
    // Add event listener for Cal messages
    const handleCalMessage = (e: MessageEvent) => {
      if (e.data.type === "bookingSuccessful") {
        const event = e.data.data;
        console.log(event, "Event");
        // Prepare data for backend
        console.log(event, "event");

        console.log(event.booking, "Booking");
        const data = {
          lead_id: lead_id,
          law_firm: "mitchell",
          email: event.booking.responses.email,
          date: event.booking.date,
          startTime: event.booking.startTime,
          endTime: event.booking.endTime,
          bookingUrl: event.booking?.url,
        };

        console.log("Meeting Data: ", data);

        // Send data to your backend
        fetch(
          "https://lawyer-leads-312641433136.us-central1.run.app/api/meetings",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            alert("Consultation scheduled successfully!");
            setIsDialogOpen(false);
          })
          .catch((error) => {
            console.error("Error:", error);
            alert(
              "There was an error scheduling your consultation. Please try again."
            );
          });
      }
    };

    window.addEventListener("message", handleCalMessage);

    return () => {
      window.removeEventListener("message", handleCalMessage);
    };
  }, [lead_id, setIsDialogOpen]);

  return (
    <div className="flex flex-col min-h-screen bg-[#292929]">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/mitchell-logo.svg"
            width={120}
            height={120}
            alt="Mitchell Law Firm logo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          <span className="sr-only">Mitchell Law Firm</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#292929]">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Mitchell Law Firm
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                  Expert Legal Solutions for Your Peace of Mind
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="mitchell-schedule">
                    Schedule a Meeting
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] w-full h-[90vh] max-h-[700px] p-0 bg-white">
                  <div className="flex flex-col h-full">
                    <DialogHeader className="p-4 pb-2">
                      <DialogTitle className="text-center text-lg font-medium">
                        Schedule a Meeting
                      </DialogTitle>
                      <DialogDescription className="text-center text-sm">
                        Choose a convenient time for your consultation.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-hidden">
                      <div className="relative w-full h-full">
                        <iframe
                          src="https://cal.com/mitchell-law-firm/30min?embed=true&theme=light"
                          className="absolute inset-0 w-full h-[calc(100%+70px)] border-none"
                          style={{
                            clipPath: "inset(0 0 70px 0)",
                          }}
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#fff]"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-[#000000]">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-2 border-[#292929] p-6 rounded-lg">
                <Scale className="h-12 w-12 text-[#000000]" />
                <h3 className="text-xl font-bold text-[#000000]">
                  Civil Litigation
                </h3>
                <p className="text-[#292929] text-center">
                  Expert representation in complex civil disputes and lawsuits.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-[#292929] p-6 rounded-lg">
                <FileText className="h-12 w-12 text-[#000000]" />
                <h3 className="text-xl font-bold text-[#000000]">
                  Contract Law
                </h3>
                <p className="text-[#292929] text-center">
                  Drafting, reviewing, and negotiating contracts to protect your
                  interests.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-2 border-[#292929] p-6 rounded-lg">
                <Shield className="h-12 w-12 text-[#000000]" />
                <h3 className="text-xl font-bold text-[#000000]">
                  Corporate Law
                </h3>
                <p className="text-[#292929] text-center">
                  Comprehensive legal services for businesses of all sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timelines */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
          <h2 className="text-3xl font-bold text-black mb-2 text-center">
            Litigation Timelines
          </h2>
          <DualTimeline
            federalIconColor="#000000"
            federalTextColor="black"
            stateIconColor="#000000"
            stateTextColor="black"
          />
        </section>

        {/* Contact us */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#fff]"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 text-[#000000]">
              Contact Us
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#292929] flex-shrink-0" />
                <p className="text-sm md:text-base text-[#000000]">
                  18443 Oakwood Dr, Birmingham, AL 35242
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#292929] flex-shrink-0" />
                <a
                  href="mailto:info@mitchelllaw.com"
                  className="text-sm md:text-base text-[#000000] hover:underline"
                >
                  info@mitchelllaw.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#292929] flex-shrink-0" />
                <a
                  href="tel:+14237650984"
                  className="text-sm md:text-base text-[#000000] hover:underline"
                >
                  +1 (423) 765-0984
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Printer className="h-5 w-5 text-[#292929] flex-shrink-0" />
                <p className="text-sm md:text-base text-[#000000]">
                  1-855-123-4567
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#292929] bg-[white]">
        <p className="text-xs text-[#000000]">
          © 2024 Mitchell Law Firm. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#000000]"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#000000]"
            href="#"
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
