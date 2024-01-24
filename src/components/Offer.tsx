"use client";
import React, { useState } from "react";

const Offer = () => {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <div>
      {check && (
        <div className="flex flex-row bg-blue-300 rounded m-2 p-4 ">
          <p className="text-center text-lg justify-center">
            Exciting offers & special exclusive discounts available for you!!
          </p>
          <p
            className="ml-auto hover:cursor-pointer"
            onClick={() => setCheck(false)}
          >
            Close
          </p>
        </div>
      )}
      {!check && <div onClick={() => setCheck(true)} className="bg-red-400 ml-auto hover:bg-red-500 transition-all duration-200 ease-in-out hover:cursor-pointer p-4 rounded-full m-4 max-w-xs text-center">See Offers</div>}
    </div>
  );
};

export default Offer;
