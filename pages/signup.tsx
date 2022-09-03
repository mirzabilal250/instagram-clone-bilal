import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="hidden md:inline w-3/5 ">
          <img
            src="/images/iphone-with-profile.jpg"
            alt="iPhone with Instagram app"
          />
        </div>
        <div className="flex flex-col md:w-2/5 sm:w-full">
          <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
            <h1 className="flex justify-center w-full">
              <img
                src="/images/logo.png"
                alt="Instagram"
                className="mt-2 w-6/12 mb-4"
              />
            </h1>

            {/* {error && <p className="mb-4 text-xs text-red-primary">{error}</p>} 
            onSubmit={handleLogin} method="POST"
            */}

            <form>
              <input
                aria-label="Enter your email address"
                type="text"
                placeholder="Email address"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                // onChange={({ target }) => setEmailAddress(target.value)}
                // value={emailAddress}
              />
              <input
                aria-label="Enter your password"
                type="password"
                placeholder="Password"
                className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                // onChange={({ target }) => setPassword(target.value)}
                // value={password}
              />
              <button
                type="submit"
                className="bg-blue-400 text-white w-full rounded h-8 font-bold opacity-50"
              >
                Login
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
            <p className="text-sm">
              Don't have an account?{` `}
              <Link href="/" className="font-bold text-blue-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
