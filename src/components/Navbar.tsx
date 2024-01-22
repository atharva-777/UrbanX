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
    <div className="p-2">
      <NavigationMenu>
        <NavigationMenuList className="container mx-auto flex justify-between items-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-md space-x-6 p-4">
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
            <NavigationMenuTrigger className="text-md space-x-6 p-4">
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
            <NavigationMenuTrigger className="text-md space-x-6 p-4">
              History
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink className="text-md space-x-6 p-4 font-medium">
                Offer Zone
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink className="text-md space-x-6 p-4 font-medium">
                Customer Service
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={"/api/auth/signin"} legacyBehavior passHref>
              <NavigationMenuLink className="text-md space-x-6 p-4 font-medium">
                Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
