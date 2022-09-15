import type { NextPage } from "next";
import { Header, Navigation, NormalGrid, ReverseGrid } from "../../components";

const SearchPage: NextPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      {/* explore main  */}
      <main className="container mt-11 md:mt-14 h-screen">
        <div className="mx-[2px] md:px-5 md:py-6 lg:max-w-7xl h-full">
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
          <ReverseGrid />
          <NormalGrid />
        </div>
      </main>
      <Navigation />
    </div>
  );
};
export default SearchPage;
