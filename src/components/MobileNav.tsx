import {
  CameraIcon,
  HomeIcon,
  LayoutGridIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="block lg:hidden fixed bottom-0 left-0 right-0">
      <div className="flex justify-center text-gray-600 dark:text-gray-300 *:flex *:items-center">
        <div className="pl-2 bg-white dark:bg-black rounded-t-xl w-full relative z-10 *:size-12 *:flex *:items-center *:justify-center justify-around">
          <Link href="/" className="">
            <HomeIcon />
          </Link>
          <Link href="/search" className="">
            <SearchIcon />
          </Link>
        </div>
        <div className="size-14 relative -top-4 justify-center w-[140px]">
          <div className="absolute bg-blue-500 bg-clip-text border-white dark:border-black border-t-transparent dark:border-t-transparent border-l-transparent dark:border-l-transparent border-[50px] rounded-full rotate-45">
            <div className="border-4 size-15 border-transparent">
              <Link
                href="/create"
                className="-rotate-45 bg-gradient-to-tr from-ig-orange to-ig-red  size-12 flex items-center justify-center text-white rounded-full"
              >
                <CameraIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="pr-2 bg-white dark:bg-black rounded-t-xl w-full relative z-10 *:size-12 *:flex *:items-center *:justify-center justify-around">
          <Link href="/browse" className="">
            <LayoutGridIcon />
          </Link>
          <Link href="/profile" className="text-ig-red ">
            <UserIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
