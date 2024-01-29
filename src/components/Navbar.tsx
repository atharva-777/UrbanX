"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { FaAlignJustify } from "react-icons/fa";

const HamburgerMenu: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <>
      <button className="relative group" onClick={onClick}>
        <div className ="relative flex items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300  origin-center">
            <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
            <div className="bg-white h-[1px] rounded"></div>
            <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
          </div>
        </div>
      </button>
    </>
  );
};

const Navbar = () => {
  const { data: session } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      {/* first navbar row */}
      <div className="p-2 bg-gray-800 text-white space-x-4">
        <NavigationMenu>
          <NavigationMenuList className="container mx-auto flex ">
            <div className=" text-white mx-2">
              <button onClick={toggleSidebar}>
                <FaAlignJustify size={20} />
              </button>
            </div>
            <div className="text-2xl font-serif mx-2 left-0 hover:text-slate-500 transition-all duration-300 ease-in-out hover:cursor-pointer">
              <Link href={"/"}>UrbanX</Link>
            </div>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md text-black space-x-4 p-2">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>Electronics</li>
                  <li>Smartphones</li>
                  <li>Grocery</li>
                  <li>Books</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md text-black space-x-6 p-4">
                Profile
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>Your Account</li>
                  <li>Your Orders</li>
                  <li>Your Wishlist</li>
                  <li>
                    <button onClick={() => signOut()}>Logout</button>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md text-black space-x-6 p-4">
                History
              </NavigationMenuTrigger>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg space-x-6 p-4 font-medium">
                  Offer Zone
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg space-x-6 p-4 font-medium">
                  Customer Service
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <div>
              <textarea
                name="Search Products"
                id=""
                placeholder="Seach UrbanX"
                className="rounded border border-zinc-950 p-2"
                cols={40}
                rows={1}
              ></textarea>
            </div>

            {session?.user && (
              <NavigationMenuItem>
                <Link href={"/"} legacyBehavior passHref>
                  <NavigationMenuLink className="text-lg space-x-6 p-4 font-medium">
                    User
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}

            {!session?.user && (
              <NavigationMenuItem>
                <Link href={"/api/auth/signin"} legacyBehavior passHref>
                  <NavigationMenuLink className="text-lg space-x-6 p-4 font-medium">
                    Login
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )}

            <NavigationMenuItem className="right-0 ml-auto">
              <Link href={"/cart"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg space-x-6 p-4 right-0 font-medium">
                  Cart
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <SideBar sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Navbar;
