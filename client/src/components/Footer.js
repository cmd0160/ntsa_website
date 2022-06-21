import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer id="footer">
        <div className="container bg-dark p-2">
            <div className="about-list">
                <h4><a href="#">ABOUT</a></h4>
                <ul>
                    <li><a href="#">Mission Statement</a></li>
                    <li><a href="#">Board Members</a></li>
                    <li><a href="#">Code Of Ethics</a></li>
                    <li><a href="#">Bylaws</a></li>
                </ul>
            </div>
            <div className="offerings-list">
                <h4><a href="#">OFFERINGS</a></h4>
                <ul>
                    <li><a href="#">Biannual Meetings</a></li>
                    <li><a href="#">Teacher Development</a></li>
                    <li><a href="#">Scholarships</a></li>
                    <li><a href="#">Trophy Festival</a></li>
                </ul>
            </div>
            <div className="membership-list">
                <h4><a href="#">MEMBERSHIP</a></h4>
                <ul>
                    <li><a href="#">Member Directory</a></li>
                </ul>
            </div>
            <div className="donate-list">
                <h4><a href="#">DONATE</a></h4>
                <ul>
                    <li><a href="#">Amazon Smile</a></li>
                    <li><a href="#">Donate Here</a></li>
                </ul>
            </div>
            <div className="contact-list">
                <h4><a href="#">CONTACT US</a></h4>
                <ul>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <div className="copyright p-1">
            <p>Copyright &copy; 2022, All Rights Reserved</p>
        </div>
    </footer>
</div>
  );
}

export default Footer