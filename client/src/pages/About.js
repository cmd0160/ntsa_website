import React from "react";


import ntsaPresident from "../../src/images/christine-cd.jpeg";
import ntsaTreasurer from "../../src/images/ashliePic.jpeg";
import vicePresident from "../../src/images/vicePresident.jpg";
import secretary from "../../src/images/secretary.JPG";
import scholarships from "../../src/images/scholarships.jpg";
import t_dev1 from "../../src/images/teacherDev-1.jpeg";
import t_dev2 from "../../src/images/teacherDev-2.jpeg";
import trophyFest from "../../src/images/trophyFest.jpeg";

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
          <p id="main-content-p">
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
                Christine Collins-Davis began her musical journey at age 5 on
                the piano, but switched over to the violin as quickly as her
                parents would allow her. She was an active participant in band,
                choir, and orchestra throughout her middle school and high
                school years before attending the University of North Texas to
                double major in violin music education with a focus in
                elementary education and oboe performance. Halfway through her
                time at UNT, Ms. Collins-Davis made the decision to focus full
                time on elementary music education.
                <br></br>
                <br></br>
                Ms. Collins-Davis taught private lessons in violin, viola,
                piano, and voice beginning in 2012 at the Frisco School of Music
                where her violin studio was named “The Most Improved Studio”.
                Culminating her graduation at the University of North Texas, Ms.
                Collins-Davis moved to Lincoln, Nebraska where she continued to
                teach privately. Although Ms. Collins-Davis grew up playing
                repertoire from the Suzuki books, she did not grow up using the
                Suzuki Method. She took her first Every Child Can and Violin
                Book 1 course at DFWWoW in 2015 and it completely changed the
                trajectory of her teaching career. Upon moving back to Texas in
                2016, Ms. Collins-Davis accepted a position as a Suzuki Strings
                Specialist as part of Hurst-Euless-Bedford ISD's Suzuki in the
                Schools program. In this program, Ms. Collins-Davis has the
                pleasure of teaching students ranging from kindergarten through
                sixth grade the violin, viola, cello, and bass using the
                traditional Suzuki Method.
                <br></br>
                <br></br>
                Ms. Collins-Davis attended the University of Texas at Arlington
                from 2018-2021 where she had the privilege of working with Dr.
                Diane Lange as a mentor and advisor while pursuing her Masters
                degree in Music Education. During her time at UTA, Ms.
                Collins-Davis had the opportunity to study the benefits of the
                Suzuki Method and similar teacher methods as they relate to
                young music learners. Her thesis discussed the benefits of the
                Suzuki Method versus traditional string classroom teaching
                methods and how the Suzuki Method could be especially beneficial
                to students with Dyslexia.
                <br></br>
                <br></br>
                Ms. Collins-Davis is passionate about the Suzuki Method. Through
                her work with the Executive Board of the North Texas Suzuki
                Association, she hopes to continue their work reaching a broad
                and diverse community of Suzuki students and teachers, as well
                as encouraging new students and teachers to join our fantastic
                Suzuki community.
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

      {/* Chair Members Start */}

      <section id="board-members">
        <h2 className="p-3 b-members center">Commitee Chairs</h2>
        <div className="card-container">
          <div className="card">
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={trophyFest} alt="" />
              </div>
              <i className="fa fa-envelope fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
            <div className="info-container py-1">
              <h3>Trophy Festival</h3>
              <h4>Rachel Samson</h4>
              <p>
                {" "}
                Rachel Samson hails from Central and NE Ohio, where she began
                her musical journey with Virginia Christopherson and Deborah
                Price. She attended high school at Hathaway Brown School and the
                Cleveland Institute of Music as part of the Young Artist
                Program. Rachel continued her studies at CIM for her Bachelor of
                Music, during which time she really enjoyed her studies in
                Chamber Music with the Cavani Quartet and Suzuki Pedagogy with
                Kimberly Meier-Sims. She studied with Ms. Meier-Sims for two
                years, training through Suzuki Violin Books 1-10 plus Practicum.
                Rachel earned her Master of Music degree on merit fellowship
                scholarship at the University of Michigan School of Music,
                Theatre & Dance in 2013.
                <br></br>
                <br></br>
                Ms. Samson has participated in summer programs including The
                Montecito Music Festival, The Perlman Music Program, ENCORE
                School for Strings, and The Indiana University String Academy.
                She has taught at the Rudolf Steiner School of Ann Arbor,
                Baldwin-Wallace Middle School Strings Summer Program, the Mentor
                High School Mannheim String Orchestra Camp at Youngstown State
                University, CIM’s Preparatory Chamber Music Camp, and Hathaway
                Brown. Her principal teachers include Caroline Coade, Yizhak
                Schotten, Jeffrey Irvine, Lynne Ramsey, Heidi Castleman, Stanley
                Konopka, Deborah Price, Michael Davis, and Virginia
                Christopherson. Musicians for whom she has performed in
                masterclass include Kim Kashkashian, Ivry Gitlis, Helen Callus,
                Karen Ritscher, Carol Rodland, Michelle LaCourse, Susan DuBois,
                Kirsten Docter, Lisa Boyko, Charles Pikler, Itzhak Perlman,
                Peter Salaff, Joel Smirnoff, Paul Katz, Rhonda Cole, Cavani
                String Quartet, Colorado String Quartet, The Jerusalem and Tokyo
                Quartets.
                <br></br>
                <br></br>
                Ms. Samson is a firm believer in the saying “They’re rarely too
                young and never too old” to learn to play the viola or violin.
                She loves and relates well with all ages and levels of students,
                and is passionate about finding fun and exciting ways to learn
                to play. She has been teaching since 2005, and is excited to
                continue learning and working with students. She and her
                husband, Neil Fong Gilfillan, have been in Frisco, TX since
                September of 2016. We know the transplant population in the DFW
                Metroplex is large, and can relate to what it is like to find
                yourself in a huge, new town. There’s a saying about Texas that
                goes, “I wasn’t born here, but I got here as fast as I could!”
                Please feel free to contact Rachel via phone or email, and in
                the meantime, do check out the studio website
                https://www.chilidogstrings.com/
              </p>
            </div>
          </div>

          <div className="card card-reverse">
            <div className="info-container py-1">
              <h3>Scholarships</h3>
              <h4>Bret Serrin</h4>
              <p>
                Dr. Bret Serrin is widely recognized as one of the United
                States’ most brilliant young teachers and pianists. Born in
                Virginia, he began studying the piano at the age of five and
                gave his first public concert at the age of six. His talent soon
                attracted attention and while still a student, he won the
                prestigious Presser Music Scholarship, as well as numerous other
                awards. During this time, he attended the Adamant International
                Summer Music Festival in Vermont, where he was invited to
                perform a live concert broadcast on NPR (National Public Radio).
                <br></br>
                <br></br>
                In 1997, Dr. Serrin pursued his graduate studies at the
                University of North Texas, completing his MM and DMA degrees in
                piano performance under the guidance of the eminent pedagogue,
                Joseph Banowetz. He has also had extensive summer coaching with
                the legendary American pianist, Earl Wild. Wild described him as
                a musician possessing a “rare pianistic ability,” one who is
                “totally dedicated to his art and...worthy of attention.” Dr.
                Serrin is the recipient of gold medals in several international
                piano competitions, including the Los Angeles Liszt Competition,
                the Hubbard Solo and Chamber Music Competition (Dallas, Texas)
                and the Symphony Orchestra of Albuquerque Concerto Competition
                (New Mexico). Other highlights of his career include a silver
                medal at the National Society of Arts and Letters Competition in
                San Antonio, and a prize in the Steinway Society’s Career Grant
                Competition. Most recently, during the Hubedni Festival in the
                Czech Republic, he was awarded the silver medal in the
                prestigious Vysocina International Piano Competition. In
                September 2003, Dr. Serrin embarked on a three-week concert tour
                of the People’s Republic of China, giving recitals and master
                classes in such cities as Guangzhou, Hejuan, Zhongshan, and
                Shenzhen. At the conclusion of the tour, he was invited back for
                further recitals, including concerts with the Guangzhou Symphony
                Orchestra. His most recent concert schedule has included
                performances with the Bohúslàv Martinú Philharmonic Orchestra in
                the Czech Republic, guest artist/chamber music recitals/master
                classes at Kansas Wesleyan University, Texas A&M International
                University, the Preucil School of Music (Iowa), Oklahoma City
                University, the University of Texas at Austin, Del Mar College
                (Corpus Christi), the TMTA convention in San Antonio, the School
                for Strings (NYC), the Music Institute of Chicago, as well as
                appearances at the National Guild of Piano Technicians Annual
                Convention (Phoenix), the Basically Beethoven Festival (Dallas),
                the International Double Reed Conference (Greensboro, North
                Carolina), performances with the Symphony Orchestra of
                Albuquerque, and radio broadcasts in California. He has also
                performed chamber music recitals with members of the Dallas and
                Chicago Symphony Orchestras.
                <br></br>
                <br></br>
                Dr. Serrin is currently the chair of the piano department at the
                Suzuki Music Institute of Dallas, the Artistic Director of the
                DFW WOW Piano Institute and has done his Suzuki training with
                Mary Craig Powell.
              </p>
            </div>
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={scholarships} alt="" />
              </div>
              <i className="fa fa-envelope fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
          </div>

          <div className="card">
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={t_dev1} alt="" />
              </div>
              <i className="fa fa-envelope fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
            </div>
            <div className="info-container py-1">
              <h3>Teacher Development Co-chair</h3>
              <h4>Lindsay Serdar</h4>
              <p>
                Born to symphony musicians, Lindsay Serdar began violin lessons
                at 3 and piano lessons at 5. She studied violin with her parents
                until 5th grade, when she moved into Marcia Henry’s studio,
                where she would stay through high school. Meanwhile, on the
                piano, Lindsay studied with Suzuki teacher Anna Nogaj through
                4th grade and then moved into Yuri Iwasaki’s studio until her
                high school transition to Claude Hobson. All the while, her
                parents helped her to realize her love of collaboration, through
                participation in their team-taught Suzuki studio and with
                Lindsay’s fellow members of the Central Illinois Youth Symphony.
                <br></br>
                <br></br>
                Lindsay earned her BM in violin at San Jose State University,
                studying with the Cypress String Quartet. Unable to put one
                instrument down in favor of another, Lindsay kept busy as a
                collaborative pianist for Cypress’ studio and other performing
                opportunities in the Bay Area. After graduating, the Serdars
                returned to Illinois. Lindsay spent a year as the pianist for
                the Peoria Symphony’s 2012-2013 season before moving to the
                Seattle area. Lindsay continued to teach piano and violin
                privately while accompanying and coaching for several local
                string studios. Enjoying cross-country moves so much, Lindsay
                and her husband decided to make one more big move in January of
                2020. She and her husband now live in the Fort Worth, Texas area
                with their three children. Most recently, Mrs. Serdar has taken
                a position in HEB ISD as a Suzuki Strings Specialist at North
                Euless Elementary. She is enjoying her time teaching during the
                day and spending time with her family in the evenings.
              </p>
            </div>
          </div>

          <div className="card card-reverse">
            <div className="info-container py-1">
              <h3>Teacher Development Co-chair</h3>
              <h4>Stacy Smith</h4>
              <p>
                Stacy Smith is a Suzuki Strings Specialist in the
                Hurst-Euless-Bedford ISD in North Texas. Formerly the Suzuki
                Program Director at the Gifted Music School in SLC, UT, and past
                president of the Suzuki Association of Utah, Stacy also served
                as the Faculty & Artistic Director of the Intermountain Suzuki
                String Institute. Ms. Smith has taught at institutes and
                workshops across the country, presented at state, national, and
                international conventions, and is a frequent contributor to the
                Journal of the Suzuki Association of the Americas. In 2018,
                Stacy was awarded the SAA’s Certificate of Achievement, an award
                given to recognize teachers with a commitment to excellence and
                life-long learning. She is raising five musical children, all of
                whom have provided her most in-depth teacher training.
              </p>
            </div>
            <div className="image-container py-1 center">
              <div className="image-holder">
                <img src={t_dev2} alt="" />
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
