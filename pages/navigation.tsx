import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { LoadingComponent } from "../components";
import { HomeIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";

const InstaPage: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <nav className="top-0 sticky z-10 w-full h-14 flex flex-col justify-center items-center bg-white shadow-sm">
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
          <div className="flex items-center justify-end space-x-4">
            <HomeIcon className="icons" />

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
              className="h-6 w-6 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </nav> */}
      <LoadingComponent />
    </div>
  );
};

export default InstaPage;

{
  /*
  
  
  
  
  */
}
