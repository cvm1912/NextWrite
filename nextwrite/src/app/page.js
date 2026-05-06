import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <main>
    <div className="bg-white-200 h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12"> 
      <div className="page-1 flex flex-col items-center justify-center gap-4 text-center w-full max-w-2xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-800">Blogs.</h1>
          <p className="font-mono mt-2 text-sm sm:text-base md:text-lg" style={{fontFamily: "cursive"}}>Explore the blogs</p>
          <Link href={'/blog'}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base">
            Create Blog
          </button>
          </Link>
      </div>
    </div>
    </main>
  );
}
