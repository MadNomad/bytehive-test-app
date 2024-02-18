import type { AppProps } from "next/app";
import { Public_Sans } from "next/font/google";
import "@/styles/globals.css";

const font = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "optional",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
