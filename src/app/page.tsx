import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import MyCarousel from "@/components/Carousel";
import conn from "@/lib/db";
import Category from "@/components/Category";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <main>
      <Offer/>
      <MyCarousel />
      <Category />
    </main>
  );
}
