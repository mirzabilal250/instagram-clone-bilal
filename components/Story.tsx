import React from "react";
interface Props {
  avatar: string;
  username: string;
}

export default function Story({ avatar, username }: Props) {
  return <div>{username}</div>;
}
