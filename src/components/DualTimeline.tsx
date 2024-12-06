"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LitigationTimeline from "./StateTimeline";
import FederalTimeline from "./FederalTimeline";
import { ScrollArea } from "@/components/ui/scroll-area";

const slides = [0, 1];
const SlideContentArray = (props: DualTimelineProps) => [
  () => (
    <div className="w-full h-full overflow-y-auto">
      <LitigationTimeline
        timelineiconcolor={props.stateIconColor}
        textcolor={props.stateTextColor}
      />
    </div>
  ),
  () => (
    <div className="w-full h-full overflow-y-auto">
      <FederalTimeline
        timelineiconcolor={props.federalIconColor}
        textcolor={props.federalTextColor}
      />
    </div>
  ),
];

interface DualTimelineProps {
  federalIconColor: string;
  federalTextColor: string;
  stateIconColor: string;
  stateTextColor: string;
}

export default function DualTimeline(props: DualTimelineProps) {
  return (
    <div className="container px-4 md:px-6 mx-auto">
      <div className="text-center mb-10">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent className="h-[95vh] sm:h-[110vh] md:h-[120vh] lg:h-[130vh]">
            {(() => {
              const slidesArray = SlideContentArray(props);

              return slides.map((slideIndex) => (
                <CarouselItem key={slideIndex} className="h-full">
                  <Card className="w-full h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <ScrollArea type="always" className="h-full">
                        {React.createElement(slidesArray[slideIndex])}
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ));
            })()}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 bg-[#333] text-white hover:bg-[#555] border border-white rounded-full p-6 text-3xl shadow-lg hover:scale-110 transition-all mx-2" />
            <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 bg-[#333] text-white hover:bg-[#555] border border-white rounded-full p-6 text-3xl shadow-lg hover:scale-110 transition-all mx-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
