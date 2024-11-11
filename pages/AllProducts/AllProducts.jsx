import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import "./products.css";
const AllProducts = () => {
  return (
    <div>
      <Navbar />
      <h1>All Prodocuts</h1>
      <hr className="hr" />
      <div className="container_products">
        <div className="filter">
          <p className="filterText">Filter Products:</p>
          <select name="color_options" id="color_options">
            <option value="white">white</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
          </select>
          <select name="size_options" id="size_options">
            <option value="white">M</option>
            <option value="red">S</option>
            <option value="blue">SM</option>
            <option value="black">LX</option>
          </select>
        </div>
        <div className="filter_right">
          <p className="filterText">Sort Products:</p>
          <select name="sort" id="sort">
            <option value="white">Newest</option>
            <option value="red">Latest</option>
          </select>
        </div>
      </div>

      <div className="sub_container">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
