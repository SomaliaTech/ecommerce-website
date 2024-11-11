import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Deals } from "../../public/data";
import { useState } from "react";
import "./homeScreen.css";

const HomeScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((state) => state - 1);
  };
  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide > Deals.length / 2 ? 0 : currentSlide + 1
    );
  };
  console.log(Deals.length / 2);
  console.log(currentSlide);
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <div className="deal">
        <h1>Todays Deals</h1>
        <div>
          <FaChevronLeft onClick={nextSlide} className="next_slide a" />

          <FaChevronRight onClick={prevSlide} className="next_prev a" />
        </div>
        <div
          style={{
            transition: "all ease 1.2s",
            transform: `translateX(-${currentSlide * 50}vw)`,
          }}
          className="deals-container"
        >
          {Deals.map((item, index) => (
            <div key={index} className="deals">
              <img src={item.image} alt="" className="deals-image" />
              <span className="deals-text">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="products_home">
        <span style={{ fontSize: "40px", marginLeft: 40, marginTop: 10 }}>
          New Collections
        </span>
        <Products />
      </div>
      <div className="our">
        <div className="left">
          <img src="../../public/Untitled design (4).png" alt="" />
        </div>
        <div className="right">
          <h1>A Fastest Secure way on Somalia Ecommerce Webiste </h1>
          <span>
            Download our app for free to send money online in minutes over 130
            other conturies . Track your payment and view your transfer histroy
            from anywahre
          </span>
          <div className="img">
            <img src={"../public/appstore.svg"} alt="" />
            <img src={"../public/googleplay.svg"} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
