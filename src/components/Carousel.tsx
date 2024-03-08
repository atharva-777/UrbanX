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
    tag: "Jackets",
    image:
    "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514037/Metamarket/HomePageUI/c7_zvnwha.jpg",
  },
  {
    tag: "Denim's",
    image:
    "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514043/Metamarket/HomePageUI/j1_wz6otm.jpg",
  },
  {
    tag: "Stripped Jeans",
    image:
    "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514041/Metamarket/HomePageUI/j3_jpbwlz.jpg",
  },
  {
    tag: "Sweatshirts",
    image:
    "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692422087/Metamarket/d1dcc17602bd460619eb3ecbed0dfa04_uqsnyy.png",
  },
  {
    tag: "Cargo Jeans",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514043/Metamarket/HomePageUI/j4_sme50g.jpg",
  },
];

const MyCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  return (
    <div className="flex flex-col justify-between items-center m-4 pt-8">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <Image src={item.image} alt="" height={200} width={200} />
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
