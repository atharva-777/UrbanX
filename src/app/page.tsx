import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Next Auth tutorial</h1>
      <p>Go to Login</p>
      <button className="p-2 rounded-md bg-blue-300 m-4">
        <Link href={"/login"}>Login</Link>
      </button>
    </div>
  );
}
