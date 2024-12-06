"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import LitigationTimeline from "@/components/StateTimeline";
import FederalTimeline from "../../components/FederalTimeline";
import LitigationTimeline from "@/components/StateTimeline";

const TimelinesCarousel = () => {
  const [isSticky, setIsSticky] = useState(false);

  const slides = [0, 1];
  const SlideContentArray = [
    () => (
      <div className="w-full h-full overflow-y-auto">
        <LitigationTimeline timelineiconcolor="#8A7D63" textcolor="black" />
      </div>
    ),
    () => (
      <div className="w-full h-full overflow-y-auto">
        <FederalTimeline timelineiconcolor="#8A7D63" textcolor="black" />
      </div>
    ),
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("timelines-section");

      // Ensure section exists before accessing getBoundingClientRect
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Check if the section is visible in the viewport
        if (sectionTop <= 0 && sectionBottom >= 0) {
          setIsSticky(true); // Make buttons sticky when section is in view
        } else {
          setIsSticky(false); // Hide buttons when section is out of view
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Add more sections here */}
      <section className="w-full py-12 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-center mb-8 text-3xl">Section 1: Introduction</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            at egestas eros.
          </p>
        </div>
      </section>

      {/* Timelines Section */}
      <section
        id="timelines-section"
        className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl mb-4">Timelines Section</h2>
            <Carousel className="w-full max-w-4xl mx-auto">
              {/* Adjust the height of the Carousel dynamically */}
              <CarouselContent className="h-[110vh] sm:h-[120vh] md:h-[130vh] lg:h-[140vh]">
                {slides.map((slideIndex) => (
                  <CarouselItem key={slideIndex} className="h-full">
                    <Card className="w-full h-[80vh] sm:h-[90vh] md:h-[100vh] lg:h-[110vh] overflow-auto">
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        {React.createElement(SlideContentArray[slideIndex], {
                          timelineiconcolor: "#8A7D63",
                          textcolor: "black",
                        })}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Sticky Buttons */}
              <div
                className={`flex justify-center mt-4 ${
                  isSticky
                    ? "fixed bottom-10 z-10 left-1/2 transform -translate-x-1/2"
                    : ""
                }`}
              >
                <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 bg-[#333] text-white hover:bg-[#555] border border-white rounded-full p-6 text-3xl shadow-lg hover:scale-110 transition-all mx-2" />
                <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 bg-[#333] text-white hover:bg-[#555] border border-white rounded-full p-6 text-3xl shadow-lg hover:scale-110 transition-all mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="w-full py-12 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-center mb-8 text-3xl">Section 2: Features</h2>
          <p className="text-center">
            Donec et erat vel nulla volutpat luctus. Mauris sit amet laoreet
            purus.
          </p>
        </div>
      </section>

      <section className="w-full py-12 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-center mb-8 text-3xl">Section 3: Benefits</h2>
          <p className="text-center">
            Nam commodo orci ut nulla tincidunt, a aliquam sem tincidunt.
            Vivamus vitae turpis ut libero sodales volutpat.
          </p>
        </div>
      </section>

      <section className="w-full py-12 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-center mb-8 text-3xl">Section 4: Contact Us</h2>
          <p className="text-center">
            Aenean vitae gravida odio. Ut sit amet arcu velit. Vivamus vel
            fringilla eros, sed varius purus.
          </p>
        </div>
      </section>

      <section className="w-full py-12 bg-[#F5F5F5]">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-center mb-8 text-3xl">Section 5: FAQ</h2>
          <p className="text-center">
            Proin molestie enim vitae turpis tincidunt ultricies. Sed ut quam et
            ipsum tristique scelerisque non at neque.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TimelinesCarousel;
