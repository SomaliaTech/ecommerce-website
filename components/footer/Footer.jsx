import "./footer.css";
import { FaShopware } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter">
        <div className="left_news">
          <h1>Sing Up For Newsletters</h1>
          <span>Get Email updates about latest shop and speical offers.</span>
        </div>
        <div className="right_news">
          <input type="text" placeholder="Your email address" />
          <div className="singup">Subscribe</div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="left_bottom">
          <div className="logo_bottom">
            <FaShopware style={{ color: "green" }} />
            Kasmalshop
          </div>
          <h1 className="title">Contact</h1>
          <div className="item">
            <span className="fast">Address:</span>
            <span className="second">
              28P2+H7J, Digfeer Rd, Mogadishu, Somalia
            </span>
          </div>
          <div className="item">
            <span className="fast">Hours:</span>
            <span className="second">7/24 hours open</span>
          </div>
          <div className="item">
            <span className="fast">Phone:</span>
            <span className="second">0615328654, 252 61 5328654</span>
          </div>
        </div>
        <div className="center_bottom">
          <h1 className="title">About</h1>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privivy Polciy</a>
          <a href="#">Teams & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="center_right">
          <h1 className="title">My Account</h1>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privivy Polciy</a>
          <a href="#">Teams & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="right_bottom">
          <h1 className="title">Install App</h1>
          <p style={{ margin: 0 }}>Fron App Store or Google Play</p>
          <div className="img_footer">
            <img src={"../public/appstore.svg"} alt="" />
            <img src={"../public/googleplay.svg"} alt="" />
          </div>
          <p style={{ margin: 0 }}> Secured Payment Gateways</p>
          <img
            src="../../src/assets/Safecheckout.png"
            alt=""
            className="payment_img"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
