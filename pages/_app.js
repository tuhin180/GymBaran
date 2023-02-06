import "../styles/globals.css";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

import localFont from "@next/font/local";
const sportingGFont = localFont({
  src: "../fonts/Sporting_Grotesque-Regular_web.woff2",
  variable: "--font-sportingG",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${sportingGFont.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
