import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="space-x-8 space-y-8 m-4">
        <button className="p-2 bg-blue-300 rounded">
          <Link href={'/login'}>Login</Link>
        </button>
      </div>
    </main>
  );
}
