import { FaMinus, FaPlus } from "react-icons/fa6";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./productInfo.css";
import { useState } from "react";

const ProductInfo = () => {
  const images = [
    "../../src/assets/products/5.3-min.jpg",
    "../../src/assets/products//27.jpg",
    "../../src/assets/products/32.jpg",
    "../../src/assets/products/27.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <>
      <Navbar />
      <div className="product_info">
        <div className="product_left">
          <div className="images">
            {images.map((item, index) => (
              <div key={index}>
                <img onClick={() => setCurrentImage(item)} src={item} />
              </div>
            ))}
          </div>
          <div className="single_image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <div className="product_rgiht">
          <h2 className="title_product">T-shirt best </h2>
          <p className="description_product">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            earum atque inventore rem obcaecati magni ut accusantium officia
            ipsa id! Rerum voluptatibus laborum nemo eius quis recusandae ab
            labore odio debitis repellendus, explicabo sapiente consequuntur
            fugiat placeat ea ut consequatur.
          </p>
          <h1 className="price">$121</h1>
          <div className="items">
            <div className="color">
              <span className="color_text">Colors: </span>
              <span>Red</span>
              <span>Green</span>
              <span>Blue</span>
            </div>
            <div className="size color">
              <span className="size_text">Size: </span>
              <span>M</span>
              <span>S</span>
              <span>LL</span>
            </div>
          </div>
          <div className="bottom_product">
            <div className="addtoCart">Add To Cart</div>
            <div className="counter">
              <FaPlus className="quantity" />
              <span className="quantity_counter">12</span>
              <FaMinus className="quantity" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductInfo;
