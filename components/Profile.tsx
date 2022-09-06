import React from "react";

export default function MiniProfile() {
  return (
    <div>
      <img
        src="/images/avatars/default.png"
        alt="gfg"
        className="rounded-full border p-[2px] w-16 h-16"
      />

      <div className="flex items-center justify-between mt-14 ml-10">
        <h2>hazmamza</h2>
        <h3>wolcome to Instagram</h3>
      </div>
    </div>
  );
}
