import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import LatestProducts from "../LatestProducts/LatestProducts";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      {/* navigation  */}
      <Navigation />
      {/* slider  */}
      <Slider />
      {/* latest products  */}
      <LatestProducts />
      {/* NewsLetter */}
      <NewsLetter />
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Home;
