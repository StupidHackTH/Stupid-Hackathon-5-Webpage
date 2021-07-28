// import "tailwindcss/tailwind.css";
import "@styles/main.scss";
import { AppProps } from "next/dist/next-server/lib/router/router";
// import "nes.css/css/nes.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
