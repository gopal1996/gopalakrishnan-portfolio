import type { AppProps } from "next/app";
import type { Metadata } from "next";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Gopalakrishnan Portfolio",
  description: "Gopalakrishnan portfolio",
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
