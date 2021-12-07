import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../component/Button";
import Gallery from "../component/Gallery";
import Meta from "../component/Meta";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const smScreenHanlder = (e: MediaQueryListEvent) => {
    console.log(e);
    if (e.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", smScreenHanlder);
    return window
      .matchMedia("(max-width: 768px)")
      .removeEventListener("change", smScreenHanlder);
  }, []);

  return (
    <>
      <Meta />

      {isSmallScreen ? (
        <section>
          <div className={styles["mobile-bg-video"]}>
            <video
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              autoPlay
              src={"/intro.mp4"}
              poster="/bg6.png"
              loop={true}
              muted
            />
          </div>
          <section className="pt-4 pb-2">
            <h1 className="text-title text-center">
              <span className="text-purple">Harrison</span> Aesthetics
            </h1>
          </section>
          <section className="scrolling-wrapper">
            <div
              style={{ backgroundImage: `url('/bg2.png')` }}
              className="card"
            ></div>
            <div
              style={{ backgroundImage: `url('/bg3.png')` }}
              className="card"
            ></div>
            <div
              style={{ backgroundImage: `url('/bg4.png')` }}
              className="card"
            ></div>
            <div
              style={{ backgroundImage: `url('/bg2.png')` }}
              className="card"
            ></div>
          </section>
        </section>
      ) : (
        <div className={`${styles["home-bg-cover"]}`}>
          <div className="container">
            <div
              className="row"
              style={{ height: "100%", alignItems: "center" }}
            >
              <div className="col-md-10">
                <h1 className="text-white text-header">All things</h1>
                <h1 className="text-white text-header">beauty</h1>
                <Button
                  style={{ marginLeft: 0, marginRight: 0 }}
                  text="Book an Appointment"
                />
                <Button
                  style={{ marginLeft: 0, marginRight: 0 }}
                  text="Register for Masterclass"
                />
              </div>
              <div className="col-md-2">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{ backgroundImage: "url('/bg2.png')" }}
                    className={`${styles["square-images"]}`}
                  ></div>
                  <div
                    style={{ backgroundImage: "url('/bg3.png')" }}
                    className={`${styles["square-images"]}`}
                  ></div>
                  <div
                    style={{ backgroundImage: "url('/bg4.png')" }}
                    className={`${styles["square-images"]}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
