import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

interface postProps {
  postId: string | number;
  username: string;
  Imag: string;
  userImag: string;
  coption: string;
}

export default function Post({
  postId,
  username,
  userImag,
  Imag,
  coption,
}: postProps) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImag}
          alt={username}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold ">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      <img src={Imag} alt={coption} className="w-full object-cover" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* coption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {coption}
      </p>

      {/* comment */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />

        <button type="submit" className="font-somiblod text-blue-400">
          Post
        </button>
      </form>
    </div>
  );
}
