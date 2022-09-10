import React from "react";
import Posts from "./Posts";
import MiniProfile from "./Profile";
import Stories from "./Stories";
import Suggestion from "./Suggestion";

export default function Content() {
  return (
    <main className="container  grid grid-col-1 md:grid-col-2 md:max-w-3xl xl:grid-col-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestion />
        </div>
      </section>
    </main>
  );
}
