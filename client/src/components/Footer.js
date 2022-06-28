import React from "react";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <div>
      <footer id="footer">
        <div className="container bg-dark p-2">
          <div className="about-list">
            <h4>
              <a href="/about">ABOUT</a>
            </h4>
            <ul>
              <li>
                <NavHashLink
                  smooth
                  to="/about/#main-content"
                  scroll={scrollWithOffset}
                >
                  Mission Statement
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/about/#board-members"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Board Members
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/about/#code-of-ethics"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Code of Ethics
                </NavHashLink>
              </li>
            </ul>
          </div>
          <div className="offerings-list">
            <h4>
              <a href="/offerings">OFFERINGS</a>
            </h4>
            <ul>
              <li>
                <NavHashLink
                  smooth
                  to="/offerings/#announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Biannual Meetings
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/offerings/#teacher-development-announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Teacher Development
                </NavHashLink>{" "}
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/offerings/#scholarships-announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Scholarships
                </NavHashLink>{" "}
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="/offerings/#trophy-festival-announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Trophy Festival
                </NavHashLink>{" "}
              </li>
            </ul>
          </div>
          <div className="membership-list">
            <h4>
              <a href="/membership">MEMBERSHIP</a>
            </h4>
            <ul>
              <NavHashLink
                smooth
                to="/membership/#member-directory"
                scroll={(el) => scrollWithOffset(el)}
              >
                Member Directory
              </NavHashLink>
            </ul>
          </div>
          <div className="donate-list">
            <h4>
              <a href="/donate">DONATE</a>
            </h4>
            <ul>
              <li>
                <a href="/donate">Amazon Smile</a>
              </li>
              <li>
                <a href="/donate">Donate Here</a>
              </li>
            </ul>
          </div>
          <div className="contact-list">
            <h4>
              <a href="/contact">CONTACT US</a>
            </h4>
          </div>
        </div>
        <hr></hr>
        <div className="copyright p-1">
          <p>Copyright &copy; 2022, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
