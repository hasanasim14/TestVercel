"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { MapPin, Phone, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DualTimeline from "../../components/DualTimeline";

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
  const lead_id = searchParams.get("lead_id") || "";

  useEffect(() => {
    const handleCalMessage = (e: MessageEvent) => {
      if (e.data.type === "bookingSuccessful") {
        const event = e.data.data;
        console.log(event, "Event");

        console.log(event, "event");

        console.log(event.booking, "Booking");
        const data = {
          lead_id,
          law_firm: "torani",
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
    <div className="flex flex-col min-h-screen torani-landing-body">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link
          className="flex items-center justify-center"
          href="#"
          style={{ paddingTop: "40px" }}
        >
          <Image
            src="/torani-logo.webp"
            width={120}
            height={120}
            alt="Torani Logo"
            style={{ maxHeight: "100%", maxWidth: "100%", marginTop: "4px" }}
          />
          <span className="sr-only">TORANI</span>
        </Link>
      </header>

      <main className="flex-1">
        {/* New Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-[#6e9489]">
                  TORANI LAW
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                  You Create, We Protect.
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="torani-schedule"
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
                          src="https://cal.com/torani-law/30min?embed=true&theme=light"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#6e9489]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-[#8A7D63] p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-[#dfdcc4]"
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
                  Securing Your Innovations
                </h2>
                <p className="text-[#F8F8F8] text-center">
                  TORANI LAW can help any business strategize and determine all
                  necessary Intellectual Property protections both domestically
                  and internationally.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 border-[#8A7D63] p-4 rounded-lg">
                <svg
                  className="h-12 w-12 text-[#dfdcc4]"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <!-- Document Outline --> */}
                  <path d="M6 2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
                  <path d="M14 2v6h6" />
                  {/* <!-- Shield --> */}
                  <path d="M12 13v3c0 2-2 4-4 4s-4-2-4-4v-3l4-2 4 2Z" />
                </svg>

                <h2 className="text-xl font-bold text-[#D9DFDB]">
                  Protecting Your IP Assets
                </h2>
                <p className="text-[#F8F8F8] text-center">
                  TORANI LAW will also police, monitor, and enforce your IP
                  rights against theft.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 border-[#8A7D63] p-4 rounded-lg">
                <svg
                  className="h-12 w-12 text-[#dfdcc4]"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <!-- Shield --> */}
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  {/* <!-- Lock Body --> */}
                  <rect x="9" y="11" width="6" height="6" rx="1" />
                  {/* <!-- Lock Shackle --> */}
                  <path d="M10 11V9a2 2 0 1 1 4 0v2" />
                </svg>

                <h2 className="text-xl font-bold text-[#D9DFDB]">
                  Safeguarding Your Future
                </h2>
                <p className="text-[#F8F8F8] text-center">
                  TORANI LAW is your one-stop, full-service Intellectual
                  Property firm.
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
            federalIconColor="#6e9489"
            federalTextColor="black"
            stateIconColor="#6e9489"
            stateTextColor="black"
          />
        </section>

        {/* Contact us */}
        <section className="w-full py-8 md:py-16 lg:py-20 bg-[#6e9489]">
          <div className="container mx-auto px-4 md:px-5">
            <h2 className="text-2xl font-bold tracking-tighter text-center mb-6 text-[#D9DFDB]">
              CONTACT US TODAY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg w-full  ">
                <MapPin className="h-10 w-10 text-[#dfdcc4]" />
                <h3 className="text-lg font-bold text-[#D9DFDB]">Address</h3>
                <p className="text-[#F8F8F8] text-center">
                  655 North Central Avenue 17th Floor
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg w-full  ">
                <Phone className="h-10 w-10 text-[#dfdcc4]" />
                <h3 className="text-lg font-bold text-[#D9DFDB]">Phone</h3>
                <p className="text-[#F8F8F8] text-center">818-254-9555</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg w-full  ">
                <Clock className="h-10 w-10 text-[#dfdcc4]" />
                <h3 className="text-lg font-bold text-[#D9DFDB]">Hours</h3>
                <p className="text-[#F8F8F8] text-center">
                  Monday - Friday: 9am - 6pm
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t-2 border-[#6e9489]">
        <p className="text-xs text-[#032840]">
          © 2024 TORANI LAW. All rights reserved.
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
