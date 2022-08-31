import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const MobileNav = ({ mobileNavHandler }) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <ul id="mobileNav">
      <div>
        <li onClick={mobileNavHandler}>
          <Link to="/about" className="p-h">
            ABOUT
          </Link>
        </li>
      </div>

      <div>
        <li onClick={mobileNavHandler}>
          <Link to="/offerings" className="p-h">
            OFFERINGS
          </Link>
        </li>
      </div>

      <div>
        <li onClick={mobileNavHandler}>
          <Link to="/donate" className="p-h">
            DONATE
          </Link>
        </li>
      </div>

      <div>
        <li onClick={mobileNavHandler}>
          <Link to="/contact" className="p-h">
            CONTACT
          </Link>
        </li>
      </div>

      {Auth.loggedIn() ? (
        <>
          <div>
            <li onClick={mobileNavHandler}>
              <Link to="/membership" className="p-h">
                MEMBERSHIP
              </Link>
            </li>
          </div>

          <div>
            <li onClick={mobileNavHandler}>
              <Link to="/profile" className="p-h">
                PROFILE
              </Link>
            </li>
          </div>

          <div>
            <li onClick={mobileNavHandler}>
              <Link to="/" className="p-h" onClick={logout}>
                LOGOUT
              </Link>
            </li>
          </div>
        </>
      ) : (
        <>
          <div>
            <li onClick={mobileNavHandler}>
              <Link to="/login" className="p-h">
                LOGIN/JOIN
              </Link>
            </li>
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
        </span>
      </div>
    </ul>
  );
};

export default MobileNav;
