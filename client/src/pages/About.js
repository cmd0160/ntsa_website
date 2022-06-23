import React from "react";
import ntsaPresident from "../../src/images/christine-cd.jpeg";
import ntsaTreasurer from "../../src/images/ashliePic.jpeg";
import vicePresident from "../../src/images/vicePresident.jpg";
import secretary from "../../src/images/secretary.JPG"

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
              <h3>Vice President</h3>
              <h4>Sarah Gonzalez</h4>
              <p>
                Sarah Gonzalez began her musical studies on the violin and piano
                but soon fell in love with the sound of the cello. She was
                fortunate to study with cellist Luis García-Renart, a student of
                Pablo Casals, Mstislav Rostropovich, and Aram Khachaturian. Mrs.
                Gonzalez also received voice training and was very active in her
                school choral program. She earned a Bachelor of Music Education
                from Wheaton College’s Conservatory of Music. While at Wheaton,
                she studied cello with Tanya Lesinsky Carey, past president of
                the Suzuki Association of the Americas, board member of the
                International Suzuki Association, and chaired the committee for
                the Suzuki Cello Book Revisions. Mrs. Gonzalez continued to
                receive long-term Suzuki training from Dr. Carey and uses her
                Cello Playing is Easy curriculum in her studio.
                <br></br>
                <br></br>
                Mrs. Gonzalez taught private lessons in cello, violin, viola,
                double bass, piano, voice, and early childhood music
                (Musikgarten) in conservatories in Chicago and Miami before
                moving to Texas. She also served as a music instructor in public
                and private schools from preschool to high school. She conducted
                orchestra, choir, show choir, and worship arts.
                <br></br>
                <br></br>
                Mrs. Gonzalez has had the privilege of performing cello in many
                genres. She participated in the World Cello Congress III, where
                she had the opportunity to play side-by-side with renowned
                cellists such as Yo-Yo Ma, Tsuyoshi Tsutsumi, Bernard
                Greenhouse, among many others. She has played cello for
                Christian artists, played in a Latin-style band, and substituted
                for the Illinois Philharmonic Orchestra. Mrs. Gonzalez and her
                husband also regularly perform for church services, conventions,
                weddings, and funerals.
                <br></br>
                <br></br>
                Sarah Gonzalez has a full Suzuki cello studio out of her home,
                including teaching all five of her children. She is also on the
                faculty of the Fort Worth Youth Orchestra Suzuki program. She
                directs the orchestra, string ensemble, and brass ensemble at
                her church and is active in the Suzuki community. She serves on
                the board of the North Texas Suzuki Association and gives
                masterclasses to the cello students of the Hurst-Euless-Bedford
                ISD Suzuki Strings program.
                <br></br>
                <br></br>
                Sarah Gonzalez has a passion for creating in all students a
                life-long love of music and guiding them to use their talents to
                serve. Creative in her approach to teaching Mrs. Gonzalez
                patiently guides students to reach their goals. She teaches
                music as a language based on her training in the Suzuki Method
                and linguistics. Her teaching centers on Dr. Suzuki’s philosophy
                that “every child can.” She firmly believes that every child can
                learn not only how to play an instrument but how to become a
                beautiful musician and person. Her hope is that all students can
                have access to Suzuki music education.
              </p>
            </div>
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={vicePresident} alt="" />
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
                Ashlie Skidmore is a third-generation Suzuki teacher and Suzuki
                parent. She began her violin studies at the age of three at the
                Suzuki Institute of Dallas under Dr. Evelyn Hermann. At the age
                of four, she was privileged to travel with a Suzuki Institute
                tour group to Japan to study with Dr. Suzuki. The Dallas tour
                group, along with the Japanese Suzuki students, also traveled to
                China to introduce the Suzuki method.
                <br></br>
                <br></br>
                Ashlie was a ten-year member of the Greater Dallas Youth
                Orchestra Association. During this time, she studied with Irene
                Mitchell followed by Dr. Ronald Neal at Southern Methodist
                University during her high school years. She received her
                Bachelor of Music Degree in Music Education at the University of
                Texas at Austin. While there, she had the privilege of studying
                violin with Dr. Eugene Gratovich and music education with Dr.
                Robert Duke. Following graduation, she taught middle school
                orchestra in the Austin, Texas area and served as a TMEA Region
                orchestra coordinator. She has completed various books of Suzuki
                teacher training with Marilyn O’Boyle, Judy Bossuat-Gallic, and
                Rolando Freitag.
                <br></br>
                <br></br>
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
              <h3>Secretary</h3>
              <h4>Amber Gutermuth</h4>
              <p>
                Amber Gutermuth (known as Ms. G by her students) is a violinist
                and violist who has a heartfelt desire to instill her own love
                of music in our future generations. She graduated with her
                Bachelor’s Degree in Music Education in December of 2021 from
                the University of Texas at Arlington where she studied with Dr.
                Martha Walvoord, Professor Elizabeth Elsner, and Professor
                Catherine Forbes. Because she grew up in the method herself
                starting at the age of 5, she is rather passionate about
                Suzuki’s pedagogy and all that it provides for students,
                including the development of exceptional musicianship and
                instrumental skill, but also characteristics that exemplify what
                it means to be good citizens of the world. In addition to the
                Suzuki method, Ms. G frequently enjoys teaching repertoire that
                exemplifies the different cultures of the world so that we can
                all learn together how music truly is a universal language! Ms.
                G does a lot musically outside of her teaching hours including
                playing in multiple string quartets and a local world music
                band. Currently Ms. G teaches part time at the Fort Worth Youth
                Orchestra Suzuki program and full time as an orchestra director
                at the 5th and 6th grade level in Mansfield ISD.
              </p>
            </div>
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={secretary} alt="" />
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
