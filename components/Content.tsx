import React from "react";
import Stories from "./Stories";

export default function Content() {
  return (
    <main className="grid grid-col-1 md:grid-col-2 md:max-w-3xl xl:grid-col-3 xl:max-w-6xl mx-auto">
      {/* section  */}
      <section className="col-span-2">
        {/* stories  */}
        <Stories />
        {/* post  */}
      </section>

      {/* section */}
      <section>
        {/* mini profile */}
        {/* suggestion */}
      </section>
    </main>
  );
}
