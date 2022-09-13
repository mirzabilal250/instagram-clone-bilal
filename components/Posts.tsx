import React from "react";
import { Post } from "./";

const posts = [
  {
    id: 123,
    username: "amaza",
    userImag: "/images/avatars/default.png",
    Imag: "/images/users/raphael/1.jpg",
    coption: "hello from react instagram chellonges",
  },
  {
    id: 124,
    username: "hamza",
    userImag: "/images/avatars/dali.jpg",
    Imag: "/images/users/raphael/2.jpg",
    coption: "hello from react instagram chellonges",
  },
];

export const Posts: React.FC = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          username={post.username}
          Imag={post.Imag}
          userImag={post.userImag}
          coption={post.coption}
        />
      ))}
    </div>
  );
};
