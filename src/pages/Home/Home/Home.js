import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
