import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Category = () => {
  return (
    <div className="m-4 flex flex-col">
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
      <div className="grid grid-cols-4 w-full max-w-xl m-4 space-x-4">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-4">
            <span className="text-4xl font-semibold">{1}</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-4">
            <span className="text-4xl font-semibold">{2}</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-4">
            <span className="text-4xl font-semibold">{3}</span>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-4">
            <span className="text-4xl font-semibold">{4}</span>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
};

export default Category;
