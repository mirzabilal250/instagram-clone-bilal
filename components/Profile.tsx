import Link from "next/link";

export const MiniProfile = () => {
  return (
    <div className="flex flex-row items-center justify-between mb-[10px]">
      <img
        src="/images/avatars/default.png"
        alt="gfg"
        className="rounded-full w-14 h-14"
      />
      <div className="flex flex-col justify-center ml-3 flex-auto">
        <div className="text-sm font-sans font-semibold line-h-sm text-black ">
          hz__egalehamza
        </div>
        <p className="text-sm font-sans font-normal text-gray-400 line-h-sm">
          Hamza El ouham
        </p>
      </div>

      <button className="text-blue-500 hover:text-blue-400 transition text-sm font-sans font-medium line-h-sm">
        <Link href="/"> Switch</Link>
      </button>
    </div>
  );
};
