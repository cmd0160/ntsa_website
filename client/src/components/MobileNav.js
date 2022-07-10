import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MobileNav = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <ul id="mobileNav">
      <div>
        <li>
          <a href="/about" className="p-h">
            ABOUT
          </a>
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
            <span className="nestedNav">Bylaws</span>
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
              <a href="/login" className="p-h">
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
      <div className="socialIcon">
        {" "}
        <span>
          {" "}
          <a href="http://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="http://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </span>
      </div>
    </ul>
  );
};

export default MobileNav;
