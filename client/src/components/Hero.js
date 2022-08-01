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
        <Link to="/signup">
          <button className="btn btn-primary ">SIGNUP!</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
