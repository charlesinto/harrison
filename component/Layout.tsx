import { NextPage } from "next";
import Script from "next/script";
import Footer from "./Footer";
import NavBar from "./NavBar";

interface Props {
  children: any;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="">{children}</div>
      <Script
        strategy="afterInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      />
      <Script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.0/moment.min.js"
      />

      <Footer />
    </>
  );
};

export default Layout;
