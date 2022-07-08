import edImage from "./../images/music_ed.jpeg";
import Hero from "../components/Hero";
import { NavHashLink } from "react-router-hash-link";

const Home = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div id="home-page">
      <Hero />

      <section id="main-content">
        <div className="container">
          <h1 className="p-3">
            Welcome to the <br></br> North Texas Suzuki Association
          </h1>
          <hr></hr>
          <h2 className="p-3">Our Mission</h2>
          <p>
            The North Texas Suzuki Association exists to coordinate, support and
            publicize Suzuki events in North Texas. We promote Suzuki teaching
            and training among teachers, parents, students and the general
            public. The highest standards of excellence in teaching and playing
            are encouraged among our members. NTSA also serves as a vehicle for
            communication among Suzuki teachers and fosters growth of the Suzuki
            philosophy in Texas.
            <br></br>
            <br></br>
            The NTSA is a chapter affiliate of the{" "}
            <span>
              <a href="https://suzukiassociation.org/">
                Suzuki Association of The Americas
              </a>
            </span>
            .
          </p>
          <hr className="trophy-hr"></hr>
        </div>
      </section>

      <section id="teacher-development">
        <div className="container container-card">
          <div className="image-container">
            <img src={edImage} alt="" />
          </div>
          <div className="container-description">
            <h2>Teacher Development</h2>
            <p>
              Stay up to date with our teacher development event taking place on
              MLK weekend.
            </p>
            <NavHashLink
              smooth
              to="/offerings/#teacher-development-announcement"
              scroll={(el) => scrollWithOffset(el)}
            >
              <button className="btn btn-primary">Teacher Development</button>
            </NavHashLink>{" "}
          </div>
        </div>
      </section>

      <section id="scholarships">
        <div className="container container-card">
          <div className="container-description">
            <h2>Scholarships</h2>
            <p>Scholarship notifications will be sent out on March 1st, 2022</p>
            <NavHashLink
              smooth
              to="/offerings/#scholarships-announcement"
              scroll={(el) => scrollWithOffset(el)}
            >
              <button className="btn btn-primary">Scholarships</button>
            </NavHashLink>{" "}
          </div>
          <div className="image-container">
            <img src={edImage} alt="" />
          </div>
        </div>
      </section>

      <section id="trophy-festival">
        <div className="container container-card">
          <div className="image-container">
            <img src={edImage} alt="" />
          </div>
          <div className="container-description">
            <h2>Trophy Festival</h2>
            <p>
              An opportunity for North Texas area Suzuki students to receive
              feedback on a solo of their choice.
            </p>
            <NavHashLink
              smooth
              to="/offerings/#trophy-festival-announcement"
              scroll={(el) => scrollWithOffset(el)}
            >
              <button className="btn btn-primary">Trophy Festival</button>
            </NavHashLink>{" "}
          </div>
        </div>
      </section>
      <hr className="trophy-hr"></hr>
    </div>
  );
};

export default Home;
