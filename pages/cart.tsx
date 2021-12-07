import Meta from "../component/Meta";
import styles from "../styles/About.module.css";
import "react-image-lightbox/style.css";
import { useState } from "react";
import Image from "next/image";
import Product from "../component/Product";

const Cart = () => {
  return (
    <div className="wrapper">
      <Meta title="Shop - Harrison Products" />
      <div className={styles["home-bg-cover"]}>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Cart;
