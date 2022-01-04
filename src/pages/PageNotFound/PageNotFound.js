import React from "react";
import { Button } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const PageNotFound = () => {
  return (
    <div>
      <Navigation />
      <div className=" text-center p-3 ">
        <h1 className="page-not-found text-color">404</h1>
        <h3>Oops! That page can't be found.</h3>
        <h4>
          Sorry, but the page you are looking for is not found. Please, make
          sure you have typed the current URL.
        </h4>
        <Button href="/" size="lg" className="m-5 contact-btn">
          Go To Home
        </Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PageNotFound;
