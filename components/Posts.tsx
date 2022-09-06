import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 123,
    username: "amaza",
    userImag: "/images/avatars/default.png",
    Imag: "/images/users/raphael/1.jpg",
    coption: "hello from react instagram chellonges",
  },
];

export default function Posts() {
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
}
