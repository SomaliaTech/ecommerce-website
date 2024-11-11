import { useEffect, useState } from "react";
import "./slider.css";
import { BsSearch } from "react-icons/bs";

function Slider() {
  const [change, setChange] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setChange(change >= 3 ? 0 : change + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [change]);
  return (
    <div className="slider">
      <div className="header">
        <h2>Order Your</h2>
        <h1>Fovourite food here!</h1>
        <p>
          Choose From a diverce Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores facere molestiae similique reiciendis culpa
          quae, unde vitae fuga! Minus, adipisci repellendus fugiat fugit quas
        </p>
        <div className="search">
          <input type="text" placeholder="What Are your Looking for..." />
          <img src="../../src/assets/" alt="" />
          <BsSearch style={{ cursor: "pointer" }} />
        </div>
      </div>
      <img
        style={
          change === 0
            ? { display: "block", transition: "all ease 1.5s" }
            : { display: "none" }
        }
        src="../../src/assets/homev2-new-arrivals.webp"
        className="slider-image"
        alt=""
      />
      <img
        style={
          change === 1
            ? { display: "block", transition: "all ease duration 1.5s" }
            : { display: "none" }
        }
        src="../../src/assets/Home Banner.png"
        className="slider-image"
        alt=""
      />
      <img
        style={
          change === 2
            ? { display: "block", transition: "all ease 1.5s" }
            : { display: "none" }
        }
        src="../../src/assets/Untitled design (36).png"
        className="slider-image"
        alt=""
      />
      <img
        style={
          change === 3
            ? { display: "block", transition: "all ease 1.5s" }
            : { display: "none" }
        }
        src="../../src/assets/summer-P2X5LJJ-970x660.jpg"
        className="slider-image"
        alt=""
      />
    </div>
  );
}

export default Slider;
