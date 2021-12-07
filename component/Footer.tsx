import Gallery from "./Gallery";

const Footer = () => {
  return (
    <div className="mobile-wrapper">
      <div className="container">
        <div className="row my-3">
          <div className="col-md-12">
            <h1 className="text-title text-center">
              Our <span className="text-purple">Gallery</span>
            </h1>
            <div className="home-store-list">
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
