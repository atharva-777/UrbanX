"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const carouselItems = [
  {
    tag: "SmartWatch",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942578/UrbanX/daniel-korpai-hbTKIbuMmBI-unsplash_kmeavo.jpg",
  },
  {
    tag: "Thermos",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942584/UrbanX/joan-tran-reEySFadyJQ-unsplash_bmfn8q.jpg",
  },
  {
    tag: "Headphones",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942577/UrbanX/kiran-ck-LSNJ-pltdu8-unsplash_upplnx.jpg",
  },
  {
    tag: "Nikon 250D Cam",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942577/UrbanX/varun-gaba-dcgB3CgidlU-unsplash_exbcwg.jpg",
  },
  {
    tag: "Pepsi 250ml",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942583/UrbanX/olena-bohovyk-ElfJDs4LAQk-unsplash_klugwi.jpg",
  },
];

const MyCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  return (
    <div className="flex flex-col justify-between items-center m-4">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <Image src={item.image} alt="" height={200} width={200}/>
                </CardContent>
              </Card>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {item.tag}
      </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
