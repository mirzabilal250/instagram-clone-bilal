import { PlusIcon } from "@heroicons/react/outline";
export const MobleStory = () => {
  return (
    <div className="bg-white box-border overflow-y-hidden relative py-[10px] mt-12 md:mt-8 block scroll-smooth scrollbar-thin">
      <div className="flex space-x-1">
        <div className="box-border items-center relative self-center cursor-pointer  px-2 flex flex-col">
          <span className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 w-[66px] h-[66px] p-[2px] flex items-center  relative rounded-full">
            <img
              src="/images/avatars/default.png"
              className="rounded-full"
              alt="stroy"
            />
          </span>
          <div className="absolute top-9 right-1 rounded-full bg-blue-600 text-md flex items-center justify-center h-4 w-4 font-semibold border-white border font-mono text-white">
            {/* <PlusIcon className="h-4 w-4 text-white" /> */}+
          </div>
          <div className="text-xs w-14 truncate text-center">your story</div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col relative overflow-y-hidden h-[85px] items-stretch ">
        <div className="flex flex-row flex-shrink-0 h-[120px] px-2 w-auto overflow-x-auto overflow-y-hidden "></div>
      </div> */
}

{
  /* <div className="box-border top-[2px] w-[80px] px-1 h-[122px] flex flex-col">
        <div className="items-center self-center cursor-pointer overflow-hidden w-16 text-center relative m-0 ">
          <span className="w-14 h-14 mx-auto mb-2 mt-1 bg-gray-50 rounded-[50%] block flex-shrink-0 flex-grow-0 basis-auto overflow-hidden relative box-border">
            <img src="/images/avatars/default.png" alt="" />
          </span>
          <div className="absolute top-11 right-1 rounded-full bg-blue-600">
            <PlusIcon className="h-4 w-4 text-white" />
          </div>
           <div className="text-xs w-14 truncate text-center">your story</div>
        </div>
      </div> */
}
