import Auth from "../utils/auth";


const MobileNav = () => {

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
      </div>

      <div>
        <li>
          <a href="/offerings" className="p-h">
            OFFERINGS
          </a>
        </li>
      </div>

      <div>
        <li>
          <a href="/donate" className="p-h">
            DONATE
          </a>
        </li>
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
