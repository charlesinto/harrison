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
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
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
