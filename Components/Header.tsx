import Link from "next/link";
import { Button } from "./ui/button";
import { BookOpen, FilePenLine } from "lucide-react";

function Header() {
  return (
    <header className=" relative p-16 text-center">
      <Link href="/">
        <h1 className="text-6xl font-black"> StoryTeller AI</h1>
        <div className="flex justify-center space-x-5 text-3xl lg:text-5xl">
          <h2> Create your own </h2>
          <div className="relative">
            <div className="absolute bg-black -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 " />
            <p className="relative text-white">Stories!</p>
          </div>
        </div>
      </Link>
      <div className="absolute -top-5 right-5 flex space-x-2">
        <Link href="/">
          <FilePenLine className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-black mt-10 border border-black p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
        <Link href="/stories">
          <BookOpen className="w-8 h-8 lg:w-10 lg:h-10 mx-auto text-black mt-10 border border-black p-2 rounded-md hover:opacity-50 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
