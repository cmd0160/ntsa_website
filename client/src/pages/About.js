import React from "react";
import ntsaPresident from "../../src/images/christine-cd.jpeg";
import ntsaTreasurer from "../../src/images/ashliePic.jpeg"

const About = () => {
  return (
    <div>
      <section id="about_hero">
        <div className="container">
          <h1>About Our Organization</h1>
        </div>
      </section>

      <section id="main-content">
        <div className="container">
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
          <hr></hr>
        </div>
      </section>

      <section id="board-members">
        <h2 className="p-3 b-members center">Board Members</h2>
        <div className="card-container">
          <div className="card">
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={ntsaPresident} alt="" />
              </div>
              <i className="fa fa-envelope fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
            <div className="info-container py-1">
              <h3>President</h3>
              <h4>Christine Collins-Davis</h4>
              <p>
                Christine Collins-Davis attended the University of North Texas
                for her Bachelors Degree in Music Education and Elementary Music
                Education. She recently graduated from the University of Texas
                at Arlington with a Masters of Music Education. She has been
                teaching in Hurst-Euless-Bedford ISD as a Suzuki Strings
                Specialist since 2016. Christine is passionate about teaching
                using the Suzuki ideal of creating better citizens through music
                lessons.
              </p>
            </div>
          </div>

          <div className="card card-reverse">
            <div className="info-container py-1">
              <h3>President</h3>
              <h4>Christine Collins-Davis</h4>
              <p>
                Christine Collins-Davis attended the University of North Texas
                for her Bachelors Degree in Music Education and Elementary Music
                Education. She recently graduated from the University of Texas
                at Arlington with a Masters of Music Education. She has been
                teaching in Hurst-Euless-Bedford ISD as a Suzuki Strings
                Specialist since 2016. Christine is passionate about teaching
                using the Suzuki ideal of creating better citizens through music
                lessons.
              </p>
            </div>
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={ntsaPresident} alt="" />
              </div>
              <i className="fa fa-envelope fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
          </div>

          <div className="card">
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={ntsaTreasurer} alt="" />
              </div>
              <i className="fa fa-envelope fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
            <div className="info-container py-1">
              <h3>Treasurer</h3>
              <h4>Ashley Skidmore</h4>
              <p>
                Ashlie plays both professionally and in community groups
                throughout the Dallas Fort Worth area. She has been teaching for
                over 20 years, and enjoys teaching students of all ages and
                enjoys working with children with special challenges.
                Previously, she served on the Executive Board for the Texas
                Chamber Music Project and the Northeast Orchestra. Currently she
                serves on the Board of Directors for the Mesquite Symphony
                Orchestra as well as the Executive Board for the North Texas
                Suzuki Association. She is the Assistant Concertmaster for the
                Mesquite Symphony Orchestra. She has two teenage children who
                are both Suzuki violinists.
              </p>
            </div>
          </div>

          <div className="card card-reverse">
            <div className="info-container py-1">
              <h3>President</h3>
              <h4>Christine Collins-Davis</h4>
              <p>
                Christine Collins-Davis attended the University of North Texas
                for her Bachelors Degree in Music Education and Elementary Music
                Education. She recently graduated from the University of Texas
                at Arlington with a Masters of Music Education. She has been
                teaching in Hurst-Euless-Bedford ISD as a Suzuki Strings
                Specialist since 2016. Christine is passionate about teaching
                using the Suzuki ideal of creating better citizens through music
                lessons.
              </p>
            </div>
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={ntsaPresident} alt="" />
              </div>
              <i className="fa fa-envelope fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
          </div>
        </div>
        <hr></hr>
      </section>

      <section id="code-of-ethics">
        <div className="container">
          <h2 className="p-3">Code Of Ethics</h2>
          <h4 className="p-2">
            North Texas Suzuki Association Code of Ethics <br></br>
            Created by the NTSA Executive Committee, 2002
          </h4>
          <p className="left">
            This Code of Ethics was adopted by the North Texas Suzuki
            Association’s Board to standardize rules of conduct for Suzuki
            teachers in relation to pupils, parents, teachers, and the public.
            It shall be the obligation of every member to maintain the highest
            standards of moral and professional conduct and personal integrity,
            always keeping the best interest of children at heart.
            <br></br>
            <br></br>
            1. I will not recruit students who are currently studying with
            another teacher. Upon leaving a program or school, I will not
            solicit students who are enrolled by that program/school without the
            express consent of the director of the school/program.
            <br></br>
            <br></br>
            2. I will accept a student who wishes to transfer to my studio only
            after I have notified the prior teacher/school involved or with any
            teacher with whom the student has terminated lessons with in the
            past 3 months. I will not accept a student who has outstanding
            financial obligations to another teacher.
            <br></br>
            <br></br>
            3. I will not make negative comments regarding other
            teachers/studios in the presence of parents/student.
            <br></br>
            <br></br>
            4. If I have doubts concerning the competence and/or motives of
            another teacher, I will voice them to the teacher involved, or I
            will remain silent. I will not make negative comments regarding
            students/parents in the presence of other students/parents.
            <br></br>
            <br></br>
            5. I will continue to grow professionally through educational
            opportunities and through active participation in the music
            community. I will support my fellow colleagues who continue to
            educate themselves and grow through their contacts in the music
            community.
            <br></br>
            <br></br>
            6. As a Suzuki teacher, I use review, listening, group activities,
            weekly reading assignments, and parent involvement, where
            appropriate, to help develop talent and motivate my students.
            <br></br>
            <br></br>
            7. In advertising, I will adhere to facts reflective of my training,
            skills, and abilities as a Suzuki teacher. I will advise parents to
            check with SAA about the training records of teachers.
            <br></br>
            <br></br>
            8. If I present a transfer student in performance/competition who
            has studied fewer than 6 consecutive months with me, I will
            acknowledge the work of the former teacher.
            <br></br>
            <br></br>
            9. I realize that I have a heightened sense of responsibility when I
            share a Suzuki student or family with another Suzuki teacher and
            will observe strict adherence to the Code of Ethics, parent
            education, and the Suzuki Philosophy.
            <br></br>
            <br></br>
            10. I will abide by the SAA Code of Ethics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
