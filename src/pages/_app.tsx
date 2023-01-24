import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
