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
          src="https://i.ibb.co/hct083p/791f9298484ac6345007b9c7787423fb.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className="text-dark">Laptop & Desktop </h1>
          <h3 className="text-color">SAVE UP TO 40%</h3>
          <p className="text-color">
            Our Assortment Of laptop & Desktop Are On Sale Now For Limited Time!
          </p>
          <Button className="shop-btn">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  hero-img"
          src="https://i.ibb.co/MnpPy2J/laptop-nexcel-bahrain.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 className="text-dark">Laptop & Desktop </h1>
          <h3 className="text-color">SAVE UP TO 60%</h3>
          <p className="text-color">
            Our Assortment Of Luggage Are On Sale Now For Limited Time!
          </p>
          <Button className="shop-btn">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  hero-img"
          src="https://i.ibb.co/3RmjSCX/1602723506704.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 className="text-dark">Laptop & Desktop </h1>
          <h3 className="text-color">SAVE UP TO 40%</h3>
          <p className="text-color">
            Our Assortment Of laptop & Desktop Are On Sale Now For Limited Time!
          </p>
          <Button className="shop-btn">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
