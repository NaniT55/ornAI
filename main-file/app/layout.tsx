import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "@/public/css/style.css";
import { ToastContainer } from "react-toastify";
import { Providers } from "@/redux/provider";
import NewNavbar from "@/component/navbar/NewNavbar";
import type { Metadata } from "next";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {/* <NewNavbar /> */}
          {children}
          <ToastContainer />
        </body>
      </Providers>
    </html>
  );
}
