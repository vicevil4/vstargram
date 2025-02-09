import { HomeIcon, SearchIcon, LayoutGridIcon, UserIcon, CameraIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../app/logo.png";

export default function DesktopNav() {
  return (
    <div className="hidden lg:block p-4 w-48 shadow-md shadow-gray-400">
      <div className="top-0 sticky">
        <Image className="w-full" src={logo} alt="" />
        <div className="ml-1 inline-flex flex-col gap-6 mt-8 *:flex *:items-center *:gap-2">
          <Link href="/">
            <HomeIcon />
            Home
          </Link>
          <Link href="/search">
            <SearchIcon />
            Search
          </Link>
          <Link href="/browse">
            <LayoutGridIcon />
            Browse
          </Link>
          <Link href="/profile">
            <UserIcon />
            Profile
          </Link>
          <Link href="/create">
            <CameraIcon />
            Create
          </Link>
        </div>
      </div> 
    </div>
  );
}