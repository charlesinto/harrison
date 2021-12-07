import { NextPage } from "next";
import Image from "next/image";
import Swal from "sweetalert2";

interface ProductCartProps {
  imageUrl?: string;
  name?: string;
  price?: string;
  description?: string;
  id?: string;
  rating?: number;
}

const ProductCart: NextPage<ProductCartProps> = ({
  imageUrl,
  name,
  price,
  description,
  id,
  rating,
}) => {
  const addToCart = () => {
    Swal.fire({
      icon: "success",
      title: "Add to cart successful",
      text: "Product has been successfully added to cart",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <div className="row mb-3">
      <div className="col-sm-4 col-md-4 col-lg-4">
        <div
          className="product-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          {/* <Image
            src={imageUrl ? imageUrl : ""}
            objectFit="cover"
            layout="fill"
          /> */}
        </div>
      </div>
      <div className="col-sm-8 col-md-8 col-lg-8">
        <h1 style={{ fontSize: 28 }} className="text-white ">
          Mac Facial Cleanser
        </h1>
        <div></div>
        <hr className="white-hr" />
        <div className="py-2"></div>
        <p className="text-white">{description}</p>
        <button className="shop-button-wrapper">&#8358; 15,000</button>
        <div className="d-flex">
          <button onClick={() => addToCart()} className="shop-button-wrapper">
            REMOVE FROM CART
          </button>
          <div className="mx-3">
            <div className="shop-button-wrapper counter-button-wrapper">
              <span className="minus-btn">-</span>

              <input type="number" className="input-wrap" value="1" />

              <span className="plus-btn">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCart.defaultProps = {
  imageUrl: "/bg19.png",
  name: "Mac Facial Cleanser",
  description:
    "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...",
  price: "15000",
  rating: 4,
};

export default ProductCart;
