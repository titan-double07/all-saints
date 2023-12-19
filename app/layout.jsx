import { Ysabeau } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { ReduxProvider } from "./redux/provider";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const ysabeau = Ysabeau({ subsets: ["latin"] });

export const metadata = {
  title: "All Saints Anglican Church Ebute",
  description:
    "Come and join us at All Saints Anglican Ebute, commune with God",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ysabeau.className} relative  `}>
        <ReduxProvider>
          <div className="fixed top-0  z-20 w-full ">
            <NavBar />
          </div>

          <div className="mt-[85px] ">
            {children}
          </div>

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
