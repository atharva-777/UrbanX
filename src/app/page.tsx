import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import MyCarousel from "@/components/Carousel";
import conn from "@/lib/db";
import Category from "@/components/Category";

export default function Home() {
  return (
    <main>
      <div className="flex text-center justify-center m-2 p-4 bg-blue-300 rounded">
        Exciting offers & special exclusive discounts available for you!!
      </div>
      <MyCarousel />
      <Category/>
    </main>
  );
}
