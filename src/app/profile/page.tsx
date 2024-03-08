"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) router.push("/");

  return (
    <div>
      <div className="flex flex-col space-y-4 p-12 justify-center items-center text-center">
        <div>
          {session?.user?.image && (
            <Image
              className="rounded-full"
              src={session.user.image}
              width={100}
              height={100}
              alt="Image"
            />
          )}
        </div>
        <p className="text-xl font-bold">Welcome, {session?.user?.name}</p>
        <p>{session?.user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
