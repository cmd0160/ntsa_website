import React from "react";
import ntsaLogo from "../images/ntsa.png";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav id="main-nav">
      <div className="container">
        <div className="theLogo">
          <a href="/">
            <img src={ntsaLogo} alt="NTSA Logo" className="logo" />
          </a>
        </div>

        <ul className="nav">
          <div>
            <li>
              <a href="/about" className="p-h">
                ABOUT
              </a>
            </li>
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
              <li>
                <Link to="/about">Bylaws</Link>
              </li>
            </ul>
          </div>

          <div>
            <li>
              <a href="/offerings" className="p-h">
                OFFERINGS
              </a>
            </li>
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

          <div>
            <li>
              <a href="/donate" className="p-h">
                DONATE
              </a>
            </li>
            <ul>
              <li>
                <Link to="/donate">Amazon Smile</Link>
              </li>
              <li>
                <Link to="/donate">Donate Here</Link>
              </li>
            </ul>
          </div>

          <div>
            <li>
              <a href="/contact" className="p-h">
                CONTACT
              </a>
            </li>
          </div>

          {Auth.loggedIn() ? (
            <>
              <div>
                <li>
                  <a href="/membership" className="p-h">
                    MEMBERSHIP
                  </a>
                </li>
                <ul>
                  <li>
                    <NavHashLink
                      smooth
                      to="/membership/#member-directory"
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      Member Directory
                    </NavHashLink>{" "}
                  </li>
                </ul>
              </div>

              <div>
                <li>
                  <a href="/profile" className="p-h">
                    PROFILE
                  </a>
                </li>
              </div>

              <div>
                <li>
                  <a href="/" className="p-h" onClick={logout}>
                    LOGOUT
                  </a>
                </li>
              </div>
            </>
          ) : (
            <>
              <div>
                <li>
                  <a href="/login_signup" className="p-h">
                    LOGIN/JOIN
                  </a>
                </li>
                {/* <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Join our association</a>
                  </li>
                </ul> */}
              </div>
            </>
          )}

          <li>
            <a href="http://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="http://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
