import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const dealsData = [
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942578/UrbanX/daniel-korpai-hbTKIbuMmBI-unsplash_kmeavo.jpg",
    discount: "70",
    product: "I phone 15",
  },
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942578/UrbanX/daniel-korpai-hbTKIbuMmBI-unsplash_kmeavo.jpg",
    discount: "70",
    product: "I phone 15",
  },
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942578/UrbanX/daniel-korpai-hbTKIbuMmBI-unsplash_kmeavo.jpg",
    discount: "70",
    product: "I phone 15",
  },
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1705942578/UrbanX/daniel-korpai-hbTKIbuMmBI-unsplash_kmeavo.jpg",
    discount: "70",
    product: "I phone 15",
  },
];

const Category = () => {
  return (
    <div className="my-4 mx-6 flex flex-col">
      <div className="text-center space-x-3 space-y-3">
        <p className="text-2xl font-bold">
          Explore the wide range of products !
        </p>
        <p>
          Exclusively available on{" "}
          <span className=" text-orange-400">UrbanX</span>
        </p>
        <hr className="border border-spacing-2 border-emerald-500" />
      </div>
      <div>
        <h3 className="text-xl font-bold p-4">
          Today&#39;s Deals{" "}
          <span className="text-base font-thin text-teal-600">
            See all deals
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-4 w-full max-w-full space-x-4 space-y-8">
        {dealsData.map((deal, ind) => {
          return (
            <Card key={ind}>
              <CardContent className="flex aspect-square items-center justify-center p-2">
                <Image src={deal.image} alt="" height={200} width={200} />
              </CardContent>
              <div className="mx-2 flex flex-row space-x-4 items-center">
                <p className="bg-red-400 p-2 w-20 rounded">
                  {deal.discount} % off
                </p>
                <p>Deal of the Day</p>
              </div>
              <div className="p-2 text-center text-base text-zinc-600">
                {deal.product}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
