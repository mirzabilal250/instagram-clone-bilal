import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <section className="bg-gray-50 h-screen">
      <main className="flex flex-grow mb-4">
        <article className="flex justify-center  flex-row mx-auto mt-8">
          <div className="iamge-phone hidden md:inline-flex flex-shrink-0">
            <div className="mt-[27px] mr-0 mb-0 ml-[113px] relative">
              <img
                alt=""
                className="hide-image fide-in"
                src="/images/login/4.png"
              />
            </div>
          </div>
          <div className="mx-auto min-w-[350px] mt-3">
            <div className="flex flex-col items-center md:bg-white mb-[10px] py-[10px] border border-gray-200 rounded-sm">
              <div className="mt-9 mb-3 flex">
                <img
                  src="/images/logo.png"
                  className="object-cover"
                  alt="logo"
                />
              </div>
              <div className="mb-[10px] w-full">
                <form
                  onSubmit={(e) => onSubmitHandler(e)}
                  className="flex flex-col mt-3"
                >
                  <input
                    aria-label="Enter your username"
                    type="text"
                    placeholder="Username"
                    className="login-input"
                    // onChange={({ target }) => setUsername(target.value)}
                    // value={username}
                  />

                  <input
                    aria-label="Enter your password"
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    // onChange={({ target }) => setPassword(target.value)}
                    // value={password}
                  />
                  <button
                    type="submit"
                    className={`insta-btn mx-8 mt-2 mb-2 ${
                      loading && "cursor-not-allowed"
                    }`}
                    disabled={!!loading}
                  >
                    {loading ? "loading..." : "Sign Up"}
                  </button>
                  <div className="flex flex-row justify-center items-center mx-[40px] mt-[10px] mb-[18px]">
                    <div className="flex-grow flex-shrink h-[1px] relative bg-gray-300"></div>
                    <div className="text-gray-400 font-semibold mx-4">OR</div>
                    <div className="flex-grow flex-shrink h-[1px] relative bg-gray-300"></div>
                  </div>
                  {/* sinUp with facebook */}
                  <div className="flex  my-4 mx-[40px]">
                    <a href="/facebooks" className="flex justify-between">
                      <span className="mr-4">
                        <svg
                          className="w-6 h-6 text-blue-900 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </span>
                      <span className="text-blue-900 text-center">
                        Continue with Facebook
                      </span>
                    </a>
                  </div>
                  <h3 className="text-center mt-3 text-sm text-blue-900">
                    forget password
                  </h3>
                </form>
              </div>
            </div>
            <div className="md:bg-white flex items-center justify-center border border-gray-200 rounded-sm mb-[10px] py-[10px]">
              <div>
                <p className="m-4 text-sm text-center">
                  Vous n’avez pas de compte ?
                  <Link href="/register">
                    <span className="text-blue-500 font-semibold cursor-pointer">
                      Inscrivez-vous
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-center mx-[10px] my-[20px]">
                Download Application{" "}
              </p>
              <div className="flex flex-row items-center justify-center my-[10px]">
                <div className="mr-2">
                  <img
                    src="/images/login/appStore.png"
                    className="h-[40px]"
                    alt="appStore"
                  />
                </div>
                <div>
                  <img
                    src="/images/login/google.png"
                    className="h-[40px]"
                    alt="goole play"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default Login;

{
  /*

import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

*/
}
