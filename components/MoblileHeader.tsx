import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { CameraIcon } from "./";

export const MoblileHeader = () => {
  return (
    <div className="bg-white shadow-sm top-0 left-0 fixed z-10 flex items-center flex-row h-11 w-full justify-between px-4 md:hidden">
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
  );
};
