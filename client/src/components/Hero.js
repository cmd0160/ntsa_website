import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { imageArr } from "../utils/imageArr";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setImageIndex((num) => {
        if (num === imageArr.length - 1) {
          return 0;
        }
        return num + 1;
      });
    };
    setInterval(timer, 10000);
    // return () => { clearInterval(timer); }
  }, []);

  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${imageArr[imageIndex]})`
      }}
    >
      <div className="container">
        <h1>Meeting Info</h1>
        <p>
          Please join us for our next meeting on September 18th, 2022.
        </p>
        <Link to="/login">
          <button className="btn btn-primary">Join Now!</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
