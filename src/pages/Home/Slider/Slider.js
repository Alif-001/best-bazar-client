import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel fade controls={false} indicators={false} interval={1500}>
      <Carousel.Item>
        <img
          id="hero"
          className="d-block w-100 hero-img"
          src="https://i.ibb.co/mvVj4T5/700302-generic-desktop-radeon-6700xt-transparent-1260x709.webp?fbclid=IwAR1W6qUqg0pnL-LWW_fKRK-5XVV25SmMo1HxYvzBnVP6IFrpI87RkeCdB7o"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Laptop & Desktop </h1>
          <h3>SAVE UP TO 40%</h3>
          <p>
            Our Assortment Of laptop & Desktop Are On Sale Now For Limited Time!
          </p>
          <Button className="shop-btn">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  hero-img"
          src="https://i.ibb.co/JK1t3PC/b320e438631991-5769476692396.jpg?fbclid=IwAR3yA9mqrp_jJgpJx2u3rh1CDRED8oiCcSFh2IbZamQKZzB_8NOyrSsMx7Y"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Luggage </h1>
          <h3>SAVE UP TO 60%</h3>
          <p>Our Assortment Of Luggage Are On Sale Now For Limited Time!</p>
          <Button className="shop-btn">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  hero-img"
          src="https://i.ibb.co/tLgbyvV/maxresdefault.jpg?fbclid=IwAR073buGlwx7LbYzPtoxh11DZNaYriShCqQCTAuJAiejx6xdaZZqTkJP7gM"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Laptop & Desktop </h1>
          <h3>SAVE UP TO 40%</h3>
          <p>
            Our Assortment Of laptop & Desktop Are On Sale Now For Limited Time!
          </p>
          <Button className="shop-btn">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
