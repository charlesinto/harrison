import Meta from "../component/Meta";
import ServiceCard from "../component/ServiceCard";
import styles from "../styles/About.module.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

const images = ["/bg9.png", "/bg10.png", "bg11.png", "/bg12.png"];

const Training = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div className="wrapper">
      <Meta title="About Us" />
      <div className={styles["home-bg-cover"]}>
        <div className="overlay"></div>
        <div className="container" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-white text-center text-title">Trainings</h1>

              <p>
                <h2
                  style={{ width: "90%", margin: "0 auto" }}
                  className="text-white text-center text-subtitle"
                >
                  Enjoy a luxury haven of state of the art treatments and
                  innovative products at our beauty home in Africa dedicated to
                  making you look and feel your best. Enjoy a luxury haven of
                  state of the art treatments and innovative products at our
                  beauty home in Africa dedicated to making you look and feel
                  your best.
                </h2>
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <h1 className="text-white text-center text-title">
                Our Various Classes
              </h1>
            </div>
          </div>
          <div className="row pt-5">
            <div className="service-wrapper">
              <ServiceCard onClick={() => {}} imageUrl="/bg9.png" />
              <ServiceCard onClick={() => {}} imageUrl="/bg10.png" />
              <ServiceCard onClick={() => {}} imageUrl="/bg11.png" />
              <ServiceCard onClick={() => {}} imageUrl="/bg12.png" />
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Training;
