import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { BottomNav } from "../components";
import Content from "../components/Content";
import Header from "../components/Header";
import { MoblileHeader } from "../components/MoblileHeader";

const HomePage: NextPage = () => {
  const onSubmithandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <MoblileHeader /> */}
      <Content />
      <BottomNav />
    </div>
  );
};

export default HomePage;
