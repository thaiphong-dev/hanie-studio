import MainMenu from "@/components/Common/MainMenu/MainMenu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "swiper/css";
import "swiper/css/pagination";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${openSans.className} text-[19px] text-bg_dark `}>
        <MainMenu />

        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}
