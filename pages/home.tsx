import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Content from "../components/Content";
import Header from "../components/Header";

const HomePage: NextPage = () => {
  const onSubmithandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content />
    </div>
  );
};

export default HomePage;
