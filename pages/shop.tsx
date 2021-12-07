import Meta from "../component/Meta";
import styles from "../styles/About.module.css";
import "react-image-lightbox/style.css";
import { useState } from "react";
import Image from "next/image";
import Product from "../component/Product";

const Shop = () => {
  return (
    <div className="wrapper">
      <Meta title="Shop - Harrison Products" />
      <div className={styles["home-bg-cover"]}>
        <div className="overlay"></div>
        <div className="container px-4" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-md-12">
              <div className="banner-brown row">
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <h1 className="text-white text-title">New</h1>
                  <h2 className="text-white text-title">Arrivals</h2>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <div
                    style={{
                      height: 120,
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img src="/banner.png" style={{ objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2"></div>
          <div className="row">
            <div className="item-bar">
              <div className="col-md-12">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th colSpan={3}>13 Items</th>
                      <th colSpan={4}>Sort By</th>
                      <th className="d-flex justify-content-end">
                        <span>
                          <i className="ion ion-ios-list"></i>
                        </span>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          <div className="mb-4"></div>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Shop;
