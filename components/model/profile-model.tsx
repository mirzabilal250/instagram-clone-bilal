export const ProfileModel = () => {
  return (
    <div className="absolute ">
      <div className="relative top-8 right-16">
        <div className="absolute right-[18px]  -top-[10px]  -bottom-[10px] h-[20px] w-[20px] rotate-45 border border-white  bg-white"></div>
        <div className="bg-white flex flex-col h-full rounded-md drop-fr w-[198px] showModel">
          <div className="cursor-pointer transition hover:bg-gray-50">
            <div className="px-4 py-2 flex justify-start font-normal text-sm line-sm font-sans text-gray-900 items-center">
              {" "}
              Profile
            </div>
          </div>
          <div className="cursor-pointer transition hover:bg-gray-50">
            <div className="px-4 py-2 flex justify-start font-normal text-sm line-sm font-sans text-gray-900 items-center">
              {" "}
              saved publications
            </div>
          </div>
          <div className="cursor-pointer transition hover:bg-gray-50">
            <div className="px-4 py-2 flex justify-start font-normal text-sm line-sm font-sans text-gray-900 items-center">
              {" "}
              setting
            </div>
          </div>
          <div className="cursor-pointer transition hover:bg-gray-50 border-b border-gray-200">
            <div className="px-4 py-2 flex justify-start font-normal text-sm line-sm font-sans text-gray-900 items-center">
              {" "}
              change account
            </div>
          </div>
          <div className="cursor-pointer transition hover:bg-gray-50">
            <div className="px-4 py-2 flex justify-start font-normal text-sm line-sm font-sans text-gray-900 items-center">
              {" "}
              Sin out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
