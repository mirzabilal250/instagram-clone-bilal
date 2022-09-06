import React from "react";
interface Props {
  avatar: string;
  username: string;
}

export default function Story({ avatar, username }: Props) {
  return (
    <div>
      <img
        className="h-14 w-14 hover:scale-110 transition transform duration-200 ease-out rounded-full p-[1.5px] cursor-pointer object-contain border-red-500 border-2"
        src={avatar}
        alt={username}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}
