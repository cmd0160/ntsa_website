import React from 'react'
import edImage from "./../images/music_ed.jpeg";


const Home = () => {
  return (
    <div id="home-page">
          <section id="hero">
        <div className="container">
            <h1>Announcements</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, et perspiciatis eveniet atque corporis
                    ab dolorum facere id pariatur iste? Est perspiciatis commodi, facilis maxime quidem aspernatur
                    ratione, qui et corporis provident sint placeat. Voluptatum amet, quis aspernatur expedita, ullam
                    quibusdam possimus nesciunt eum doloremque obcaecati temporibus, laborum veniam ea!
                </p>
                <button className="btn btn-primary">Join Now!</button>
        </div>
    </section>

    <section id="main-content">
        <div className="container">
            <h1 className="p-3">Welcome to the <br></br> North Texas Suzuki Association</h1>
            <hr></hr>
            <h2 className="p-3">Our Mission</h2>
            <p>The North Texas Suzuki Association exists to coordinate, support and publicize Suzuki events in North
                Texas.
                We promote Suzuki teaching and training among teachers, parents, students and the general public. The
                highest standards of excellence in teaching and playing are encouraged among our members. NTSA also
                serves
                as a vehicle for communication among Suzuki teachers and fosters growth of the Suzuki philosophy in
                Texas.
                <br></br>
                <br></br>
                The NTSA is a chapter affiliate of the <span><a href="https://suzukiassociation.org/">Suzuki Association
                        of The Americas</a></span>.
            </p>
            <hr></hr>
        </div>
    </section>

    <section id="announcement">
        <div className="container">
            <h2>Next biannual NTSA general meeting</h2>
            <p>September 18th, 2022
            <br></br>
                3pm
                <br></br>
                Location: TBD
            </p>
            <button className="btn btn-primary">Events</button>
        </div>
    </section>

    <section id="teacher-development">
        <div className="container container-card">
            <div className="image-container">
                <img src={edImage} alt="" />
            </div>
            <div className="container-description">
                <h2>Teacher Development</h2>
                <p>Stay up to date with our teacher development event taking place on MLK weekend.</p>
                <button className="btn btn-primary">Teacher Development</button>
            </div>
        </div>
    </section>

    <section id="scholarships">
        <div className="container container-card">
            <div className="container-description">
                <h2>Scholarships</h2>
                <p>Scholarship notifications will be sent out on March 1st, 2022</p>
                <button className="btn btn-primary">Scholarships</button>
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
                <p>An opportunity for North Texas area Suzuki students to receive feedback on a solo of their choice.
                </p>
                <button className="btn btn-primary">Trophy Festival</button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home