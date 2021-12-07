import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title?: string;
  name?: string;
  content?: string;
  keywords?: string;
}

const Meta: NextPage<Props> = ({ title, content, keywords }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        />
        <link
          href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
          rel="stylesheet"
        />

        <title>{title}</title>
        <meta name="description" content={content} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "Harrison Aesthetics",
  content: "Harrison Aesthetics",
  keywords: "Beauty,Eye Lashes",
};

export default Meta;
