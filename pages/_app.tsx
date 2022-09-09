import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ProgressBar } from "../components/Progress";
import "../styles/globals.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [isProgress, setIsProgress] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      setIsProgress(true);
    };
    const stop = () => {
      setIsProgress(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", stop);
    router.events.on("routeChangeError", stop);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", stop);
      router.events.off("routeChangeError", stop);
    };
  }, [router]);

  return (
    <>
      <ProgressBar isAnimating={isProgress} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
