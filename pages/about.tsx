import Meta from "../component/Meta";
import ServiceCard from "../component/ServiceCard";
import styles from "../styles/About.module.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

const images = ["/bg9.png", "/bg10.png", "bg11.png", "/bg12.png"];

const About = () => {
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
              <h1 className="text-white text-center text-title">Who We Are</h1>

              <h2
                style={{ width: "90%", margin: "0 auto" }}
                className="text-white text-center text-subtitle"
              >
                <p>
                  Our mission at Harrison aesthetics is to provide a friendly,
                  personalized and relaxing service through our professionalism
                  per versatility in the aesthetic artistry/industry. We ensure
                  our clients are always number one as we bring out the
                  spectacuLASH look while your skin is in good hands.
                </p>
              </h2>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12">
              <h1 className="text-white text-center text-title">
                Our Services
              </h1>

              <h1 className="text-white text-center text-subtitle">
                <p>
                  Being a Queen is all about the glamour. Harrison aesthetics is
                  a renowned beauty esthetics clinic located in the heart of
                  lekki phase one in Lagos state. We offer natural &amp;
                  professional luxury eyelash extensions with premium quality
                  products. Our services includes; eyelash extensions, natural
                  &amp; mink lashes, microblading, eyebrow threading, facials,
                  nails and peels. Our Serene environment and esthetic touch
                  gives our clients glamourous look to protrude beauty. We
                  provide the elegance you need and trust us to make you stand
                  out. Give us a try and be assured that you'll be convinced to
                  become our customers.
                </p>
              </h1>
            </div>
          </div>
          <div className="row pt-5">
            <div className="service-wrapper">
              <ServiceCard
                title="Classic Lash Set"
                onClick={() => setIsOpen(true)}
                imageUrl="/bg9.png"
              />
              <ServiceCard
                title="Hybrid Lash Set"
                onClick={() => setIsOpen(true)}
                imageUrl="/bg10.png"
              />
              <ServiceCard
                title="Volume Lash Set"
                onClick={() => setIsOpen(true)}
                imageUrl="/bg11.png"
              />
              <ServiceCard
                title="Natural Volumne Lash Set"
                onClick={() => setIsOpen(true)}
                imageUrl="/bg12.png"
              />
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

export default About;
