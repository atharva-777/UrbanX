import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const UserData = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>{session && <p>User logged in</p>}</div>
  )
}

export default function Home() {
  return (
    <main>
      <div className="space-x-8 space-y-8 m-4">
        <button className="p-2 bg-blue-300 rounded">
          <Link href={'/login'}>Login</Link>
        </button>
        <UserData/>
      </div>
    </main>
  );
}
