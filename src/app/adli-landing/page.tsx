"use client";

import '../globals.css'
import React from "react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation"; // Use useSearchParams for URL parameters
// import { Button } from "../../components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, Mail, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import DualTimeline from "../../components/DualTimeline";
import DualTimeline from "@/components/DualTimeline";

export default function Component() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuspenseContent
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </Suspense>
  );
}

function SuspenseContent({
  isDialogOpen,
  setIsDialogOpen,
}: {
  isDialogOpen: boolean;
  setIsDialogOpen: (open: boolean) => void;
}) {
  const searchParams = useSearchParams();
  const lead_id = searchParams.get("lead_id") || ""; // Fetch lead_id from URL parameters

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
          lead_id,
          law_firm: "adli",
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

  const handleMeetingBooking = (lead_id: string) => {
    const date = new Date().toISOString(); // Example date, replace with actual date
    const day = new Date().toLocaleString("en-us", { weekday: "long" }); // Example day, replace with actual day

    const data = {
      lead_id,
      date,
      day,
    };

    // Send data to the backend
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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col min-h-screen adli-landing-body">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/aldi-logo.svg"
            width={120}
            height={120}
            alt="Adli logo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
          <span className="sr-only">Adli</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Image
                  src="/aldi-logo-name.svg"
                  width={400}
                  height={200}
                  alt="Adli hero image"
                  className="mx-auto"
                />
                <p className="mx-auto text-[#9C8D7C] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-[700px]">
                  ADVOCATES. DEALMAKERS. LITIGATORS. INNOVATORS.
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-[#8A7D63] text-white hover:bg-[#9C8D7C] rounded-[4px] "
                    onClick={() => handleMeetingBooking(lead_id)}
                  >
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
                          src="https://cal.com/adli-law-group/30min?embed=true&theme=light&styling.brandColor=%238A7D63&styling.textColor=%23032840&styling.backgroundColor=white&styling.buttonColor=%238A7D63&styling.buttonText=white&styling.errorColor=%23FF0000&styling.highlightColor=%239C8D7C"
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

        {/* About us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#032840]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-[#8A7D63] p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-[#8A7D63]"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
                <h2 className="text-xl font-bold text-[#D9DFDB]">
                  Schedule a Meeting
                </h2>
                <p className="text-[#9C8D7C] text-center">
                  Easily book a time to discuss your legal matters.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-[#8A7D63] p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-[#8A7D63]"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
                <h2 className="text-xl font-bold text-[#D9DFDB]">
                  Legal Consultation
                </h2>
                <p className="text-[#9C8D7C] text-center">
                  Expert legal advice tailored to your case.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-[#8A7D63] p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-[#8A7D63]"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <h2 className="text-xl font-bold text-[#D9DFDB]">
                  Confidentiality & Trust
                </h2>
                <p className="text-[#9C8D7C] text-center">
                  Your sensitive information is always protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TImelines */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
          <h2 className="text-3xl font-bold text-black mb-2 text-center">
            Litigation Timelines
          </h2>
          <DualTimeline
            federalIconColor="#8A7D63"
            federalTextColor="black"
            stateIconColor="#8A7D63"
            stateTextColor="black"
          />
        </section>

        {/* Contact us */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-[#D9DFDB]">
          <div className="container px-4 md:px-5">
            <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 text-[#032840]">
              CONTACT US TODAY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg w-full">
                <MapPin className="h-10 w-10 text-[#8A7D63]" />
                <h3 className="text-lg font-bold text-[#032840]">
                  Mailing Address
                </h3>
                <p className="text-[#9C8D7C] text-center">
                  12400 Wilshire Blvd, Suite 1460 Los Angeles, 90025
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg w-full">
                <Mail className="h-10 w-10 text-[#8A7D63]" />
                <h3 className="text-lg font-bold text-[#032840]">Email</h3>
                <p className="text-[#9C8D7C] text-center">info@adlilaw.com</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg w-full">
                <Phone className="h-10 w-10 text-[#8A7D63]" />
                <h3 className="text-lg font-bold text-[#032840]">Phone</h3>
                <p className="text-[#9C8D7C] text-center">(800) 817-2949</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg w-full">
                <Printer className="h-10 w-10 text-[#8A7D63]" />
                <h3 className="text-lg font-bold text-[#032840]">Fax</h3>
                <p className="text-[#9C8D7C] text-center">(213) 623-6554</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t-2 border-[#8A7D63]">
        <p className="text-xs text-[#032840]">
          © 2024 Adli. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#032840]"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#032840]"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
