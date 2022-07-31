// import { useEffect } from "react";
import ntsaLogo from "../images/ntsa.png";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = ({ mobileNavHandler, displayMobileNav }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  // useEffect(() => {
  //   // 👇️ scroll to top on page load
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0});
  }

  return (
    <nav id="main-nav">
      <div className="container">
        <div className="logo-info">
          <div className="theLogo" onClick={scrollToTop}>
            <Link to="/">
              <img src={ntsaLogo} alt="NTSA Logo" className="logo" />
            </Link>
          </div>
          <p className="logo-title">North Texas Suzuki Association</p>
        </div>

        <ul className="nav">
          <div>
            <li onClick={scrollToTop}>
              <Link to="/about" className="p-h">
                ABOUT
              </Link>
            </li>
            <ul>
              <li>
                <HashLink
                  smooth
                  to="/about/#main-content"
                  scroll={scrollWithOffset}
                >
                  <span className="nestedNav">Mission Statement</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about/#board-members"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <span className="nestedNav">Board Members</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/about/#code-of-ethics"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <span className="nestedNav">Code of Ethics</span>
                </HashLink>
              </li>
              <li>
                <span className="nestedNav"><a href="https://docs.google.com/document/d/1N20CfHDNs295EB6BhrnXfPm5ct4E4zlUcQvacOk-k1I/edit?usp=sharing">By Laws</a></span>
              </li>
            </ul>
          </div>

          <div>
            <li>
              <Link to="/offerings" className="p-h" onClick={scrollToTop}>
                OFFERINGS
              </Link>
            </li>
            <ul>
              <li>
                <HashLink
                  smooth
                  to="/offerings/#announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <span className="nestedNav">Biannual Meetings</span>
                </HashLink>
              </li>
              <li>
                <HashLink
                  smooth
                  to="/offerings/#teacher-development-announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <span className="nestedNav">Teacher Development</span>
                </HashLink>{" "}
              </li>
              <li>
                <HashLink
                  smooth
                  to="/offerings/#scholarships-announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <span className="nestedNav">Scholarships</span>
                </HashLink>{" "}
              </li>
              <li>
                <HashLink
                  smooth
                  to="/offerings/#trophy-festival-announcement"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <span className="nestedNav">Trophy Festival</span>
                </HashLink>{" "}
              </li>
            </ul>
          </div>

          <div>
            <li>
              <Link to="/donate" className="p-h" onClick={scrollToTop}>
                DONATE
              </Link>
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
              <Link to="/contact" className="p-h" onClick={scrollToTop}>
                CONTACT
              </Link>
            </li>
          </div>

          {Auth.loggedIn() ? (
            <>
              <div>
                <li>
                  <Link to="/membership" className="p-h" onClick={scrollToTop}>
                    MEMBERSHIP
                  </Link>
                </li>
                <ul>
                  <li>
                    <HashLink
                      smooth
                      to="/membership/#member-directory"
                      scroll={(el) => scrollWithOffset(el)}
                    >
                      <span className="nestedNav">Member Directory</span>
                    </HashLink>{" "}
                  </li>
                </ul>
              </div>

              <div>
                <li>
                  <Link to="/profile" className="p-h" onClick={scrollToTop}>
                    PROFILE
                  </Link>
                </li>
              </div>

              <div>
                <li>
                  <Link to="/" className="p-h" onClick={logout}>
                    LOGOUT
                  </Link>
                </li>
              </div>
            </>
          ) : (
            <>
              <div>
                <li>
                  <Link to="/login" className="p-h" onClick={scrollToTop}>
                    LOGIN/JOIN
                  </Link>
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
          <li className="hamburger" onClick={mobileNavHandler}>
            {!displayMobileNav ? (
              <i className="fa-solid fa-bars fa-3x hamburger-icon"></i>
            ) : (
              <i className="fa-solid fa-x fa-3x"></i>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
