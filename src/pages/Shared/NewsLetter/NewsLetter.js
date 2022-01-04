import React from "react";
import { FiSend } from "react-icons/fi";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter p-5 my-5">
      <div className="container text-center  p-5">
        <h5>SUBSCRIBE NOW</h5>
        <h3>GET OUR UPDATES ALWAYS FAST</h3>
        <h6>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</h6>
        <div>
          <form id="form">
            <input
              id="news-input"
              type="text"
              placeholder="Your email address"
            />
            <button className="signup-btn">
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
