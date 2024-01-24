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

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="p-4 bg-gray-800 text-white">
      <NavigationMenu>
        <NavigationMenuList className="container mx-auto flex justify-between items-center">
      <div className="text-3xl font-serif mr-2 left-0 hover:text-slate-500 transition-all duration-300 ease-in-out hover:cursor-pointer">UrbanX</div>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md text-black space-x-6 p-4">
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
  );
};

export default Navbar;
