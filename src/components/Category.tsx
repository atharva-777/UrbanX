import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const dealsData = [
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514023/Metamarket/HomePageUI/b2_ytvl6l.png",
    discount: "70",
    product: "Calvin Klein",
  },
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514024/Metamarket/HomePageUI/b9_rsrpsz.png",
    discount: "70",
    product: "Puma",
  },
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514024/Metamarket/HomePageUI/b6_msucys.png",
    discount: "70",
    product: "Levi's",
  },
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514023/Metamarket/HomePageUI/b1_r0jhxc.png",
    discount: "70",
    product: "H&M",
  },
  {
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514023/Metamarket/HomePageUI/b3_znyfm8.png",
    discount: "70",
    product: "Nike",
  },
];

const shopCateories = [
  {
    category: "Electronics",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514037/Metamarket/HomePageUI/c3_nvxsqb.jpg",
    offer: "20",
  },
  {
    category: "Cloths",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514043/Metamarket/HomePageUI/j4_sme50g.jpg",
    offer: "50",
  },
  {
    category: "Books",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514042/Metamarket/HomePageUI/refer_th2dmf.png",
    offer: "60",
  },
  {
    category: "Grocery",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514034/Metamarket/HomePageUI/c4_j8mo8a.jpg",
    offer: "10",
  },
  {
    category: "Beuty",
    image:
      "https://res.cloudinary.com/dq4vpg3fh/image/upload/v1692514024/Metamarket/HomePageUI/antonin-fels-OdqmOsUgNwk-unsplash_n9bwlg.jpg",
    offer: "12",
  },
];

const Category = () => {
  return (
    <div>
      <div className="m-6 flex flex-col">
        <div className="text-center space-x-3 space-y-3">
          <p className="text-2xl font-bold">
            Explore the wide range of clothing styles !
          </p>
          <p>
            Exclusively available on{" "}
            <span className=" text-orange-400">UrbanX</span>
          </p>
          <hr className="border border-spacing-2 border-emerald-500" />
        </div>
        <div className="m-4">
          <div>
            <h3 className="text-xl font-bold p-4">
              Today&#39;s Brand Deals{" "}
              <span className="text-base font-thin text-teal-600">
                See all deals
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-5 w-full max-w-full space-x-4">
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

        <div className="m-4">
          <div>
            <h3 className="text-xl font-bold p-4">
              Shop according to category{" "}
              <span className="text-base font-thin text-teal-600">
                See all products
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-5 w-full max-w-full space-x-4">
            {shopCateories.map((item, ind) => {
              return (
                <Card key={ind}>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <Image src={item.image} alt="" height={200} width={200} />
                  </CardContent>
                  <div className="mx-2 flex flex-row space-x-4 items-center p-4">
                    <p className="bg-blue-400 p-2 w-30 rounded">
                      Upto {item.offer} % off
                    </p>
                    <p>{item.category}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
