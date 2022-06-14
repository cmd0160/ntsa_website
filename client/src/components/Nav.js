import React from 'react'

const Nav = () => {
  return (
<nav id="main-nav">
    <div className="container">
        <div className="logo">
            <a href='/'><i className="fa-solid fa-music fa-3x p-1"></i></a>
        </div>

        <ul className="nav">
            <div>
                <li><a href="/about" className="p-h">ABOUT</a></li>
                <ul>
                    <li><a href="#">Mission Statement</a></li>
                    <li><a href="#">Board Members</a></li>
                    <li><a href="#">Code Of Ethics</a></li>
                    <li><a href="#">Bylaws</a></li>
                </ul>
            </div>

            <div>
                <li><a href="/offerings" className="p-h">OFFERINGS</a></li>
                <ul>
                    <li><a href="#">Biannual Meetings</a></li>
                    <li><a href="#">Teacher Development</a></li>
                    <li><a href="#">Scholarships</a></li>
                    <li><a href="#">Trophy Festival</a></li>
                </ul>
            </div>

            <div>
                <li><a href="/membership" className="p-h">MEMBERSHIP</a></li>
                <ul>
                    <li><a href="#">Member Directory</a></li>
                </ul>
            </div>

            <div>
                <li><a href="/login_signup" className="p-h">LOGIN/JOIN</a></li>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Join our association</a></li>
                </ul>
            </div>

            <div>
                <li><a href="/donate" className="p-h">DONATE</a></li>
                <ul>
                    <li><a href="#">Amazon Smile</a></li>
                    <li><a href="#">Donate Here</a></li>
                </ul>
            </div>

            <div>
                <li><a href="/contact" className="p-h">CONTACT US</a></li>
                <ul>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>

            <li><a href="http://facebook.com" target="_blank"><i className="fab fa-facebook fa-2x"></i></a></li>
            <li><a href="http://instagram.com" target="_blank"><i className="fab fa-instagram fa-2x"></i></a></li>
        </ul>
    </div>
</nav>

  )
}

export default Nav