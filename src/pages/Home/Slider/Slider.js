import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel fade className="h-100">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/mvVj4T5/700302-generic-desktop-radeon-6700xt-transparent-1260x709.webp?fbclid=IwAR1W6qUqg0pnL-LWW_fKRK-5XVV25SmMo1HxYvzBnVP6IFrpI87RkeCdB7o"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/JK1t3PC/b320e438631991-5769476692396.jpg?fbclid=IwAR3yA9mqrp_jJgpJx2u3rh1CDRED8oiCcSFh2IbZamQKZzB_8NOyrSsMx7Y"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/tLgbyvV/maxresdefault.jpg?fbclid=IwAR073buGlwx7LbYzPtoxh11DZNaYriShCqQCTAuJAiejx6xdaZZqTkJP7gM"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
