import React from "react";
import {
  HeartIcon,
  PaperAirplaneIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { CameraIcon, RoundedPlus, ProfileModel } from "./";
import { Menu } from "@headlessui/react";

export const Header: React.FC = () => (
  <nav>
    <div className="bg-white dark:bg-dark shadow-sm top-0 left-0 fixed z-10 flex items-center flex-row h-11 w-full justify-between px-4 md:hidden">
      <div className="flex items-center basis-8 flex-row">
        <CameraIcon />
      </div>
      <div className="flex items-center flex-row">
        <div className="relative cursor-pointer">
          <img src="/images/logo.png" alt="logo" className="h-[29px]" />
        </div>
      </div>

      <div className="relative icons">
        <PaperAirplaneIcon className="icons rotate-45 " />
        <div className="bag">4</div>
      </div>
    </div>
    <div className="hidden top-0 fixed z-10 w-full h-14 md:flex flex-col justify-center items-center bg-white dark:bg-dark shadow-sm">
      <div className="flex items-center  justify-between w-full  px-5 h-full max-w-[975px]">
        <div className="relative cursor-pointer">
          <img src="/images/logo.png" alt="logo" className="h-[29px]" />
        </div>
        <div className="hidden md:inline-flex">
          <div className="mt-1 relative p-3 rounded-md  ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input className="input" type="text" placeholder="Search" />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="icons " />
          <div className="relative icons ">
            <PaperAirplaneIcon className="icons rotate-45 " />
            <div className="bag">4</div>
          </div>
          {/* <PlusCircleIcon className="icons xs-hidden" /> */}
          <RoundedPlus />
          <UserGroupIcon className="icons" />
          <HeartIcon className="icons " />
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="cursor-pointer focus:outline-none">
              <img
                src="/images/avatars/default.png"
                alt="avatar"
                className="h-6 w-6 rounded-full cursor-pointer"
              />
            </Menu.Button>
            <ProfileModel />
          </Menu>
        </div>
      </div>
    </div>
  </nav>
);
