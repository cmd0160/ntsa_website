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
    setInterval(timer, 20000);
    // return () => { clearInterval(timer); }
  }, []);

  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${imageArr[imageIndex]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h1>Announcements</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, et
          perspiciatis eveniet atque corporis ab dolorum facere id pariatur
          iste? Est perspiciatis commodi, facilis maxime quidem aspernatur
          ratione, qui et corporis provident sint placeat. Voluptatum amet, quis
          aspernatur expedita, ullam quibusdam possimus nesciunt eum doloremque
          obcaecati temporibus, laborum veniam ea!
        </p>
        <Link to="/login">
          <button className="btn btn-primary">Join Now!</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
