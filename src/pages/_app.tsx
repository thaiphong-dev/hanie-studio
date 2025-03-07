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
import Footer from "@/components/Common/Footer/Footer";
import { useRouter } from "next/router";
const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${openSans.className} text-[19px] text-bg_dark `}>
        {pathname !== "/booking" && <MainMenu />}

        <Component {...pageProps} />
        {pathname !== "/booking" && <Footer />}
      </div>
    </QueryClientProvider>
  );
}
