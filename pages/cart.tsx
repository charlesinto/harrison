import Meta from "../component/Meta";
import styles from "../styles/About.module.css";
import "react-image-lightbox/style.css";
import { useState } from "react";
import Image from "next/image";
import Product from "../component/Product";
import ProductCart from "../component/ProductCart";
import Button from "../component/Button";

const Cart = () => {
  return (
    <div className="wrapper">
      <Meta title="Shop - Harrison Products" />
      <div className={styles["home-bg-cover"]}>
        <div className="overlay"></div>

        <div className="container" style={{ zIndex: 1 }}>
          <div className="pt-4">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
          <div className="my-4"></div>
          <div className="row">
            <div className="col-sm-4 col-md-5"></div>
            <div className="col-sm-8 col-md-7">
              <div className="row">
                <div className=" col-md-6 col-sm-6 col-sm-device">
                  <div className="price-detail">
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h1 className="text-white">Sub Total</h1>
                    </div>
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h1 className="text-white">Shipping Fee</h1>
                    </div>
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <h1 className="text-white">Coupon</h1>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-sm-device">
                  <div className="price-detail">
                    <h1 className="text-white text-right">NGN 30,000</h1>
                    <h1 className="text-white text-right">NGN 3,000</h1>
                    <h1 className="text-white text-right"></h1>
                  </div>
                </div>
              </div>
              <hr className="white-hr" />
              <div className="row">
                <div className="col-md-6 col-sm-6 col-sm-device">
                  <div className="price-detail">
                    <h1 className="text-white text-left">Total</h1>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-sm-device">
                  <div className="price-detail">
                    <h1 className="text-white text-right">NGN 33,000</h1>
                  </div>
                </div>
              </div>
              <div className="my-4"></div>
              <div className="row">
                <div className="col-md-12">
                  <Button text="Pay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
