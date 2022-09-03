import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  MenuIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="shadow-sm bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative cursor-pointer hidden lg:inline-grid  w-24">
          <Image src="/images/logo.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative cursor-pointer  w-10 lg:hidden flex-shrink-0">
          <Image
            src="/images/insta-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="mt-1 relative p-3 rounded-md  ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input className="input" type="text" placeholder="Search" />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="icons" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative icons">
            <PaperAirplaneIcon className="icons rotate-45" />
            <div className="bag">4</div>
          </div>
          <PlusCircleIcon className="icons" />
          <UserGroupIcon className="icons" />
          <HeartIcon className="icons" />
          <img
            src="/images/avatars/default.png"
            alt="avatar"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
