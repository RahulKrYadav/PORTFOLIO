import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const education = [
    {
      title: "NSUT - New Delhi",
      description: "Pursuing B.Tech (Batch:- 2020-2024)",
      imgUrl: projImg1,
    },
    {
      title: "Govt CO-ED SSS Site-1, Dwarka, New Delhi",
      description: "CBSE - INTERMEDIATE - 2020",
      imgUrl: projImg2,
    },
    {
      title: "Govt CO-ED SSS Site-1, Dwarka, New Delhi",
      description: "CBSE - METRIC - 2018",
      imgUrl: projImg2,
    },
  ];

  
  const experiance = [
    {
      title: "Intern at PFC Ltd.",
      description: "Duration:- 18 May-12 July 23 (Work on Modernization of Pfc website)",
      imgUrl: projImg6,
    },
    {
      title: "Intern at ApnaCam",
      description: "Duration:- 6 March-27 March 23 (Work on the backend of company website using Node.Js & Express.Js)",
      imgUrl: projImg3,
    },
   
  ];



  const projects = [
    {
      title: "Audio-Verse",
      description: "An E-Commerce website, which is fully functional and have many functionalities like live search, add to cart, checkout, make payment",
      imgUrl: projImg4,
    },
    {
      title: "PathFinding Visualizer",
      description: "A web app which visualize many algos like Dijkstra & A* with the functionality of different mazes.",
      imgUrl: projImg5,
    },
    {
      title: "Jokes-Google Chrome Extention",
      description: "Developed using JavaScript. It Show random jokes when you click on its icon.",
      imgUrl: projImg7,
    },
    {
      title: "Jarvis-Assistant",
      description: "Developed using python, It is a virtual desktop assistant integrated with Chatgpt",
      imgUrl: projImg8,
    },
    {
      title: "Voice Assist Web Page",
      description: "Developed using JavaScript, It is build for hands free experiance, you can give command with your voice.",
      imgUrl: projImg9,
    },
    {
      title: "Front-end of website",
      description: "Design & Development front-end of company website using HTML, CSS, JavaScript, Bootstrap-5",
      imgUrl: projImg10,
    },
  ];



  



  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                
               <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">EDUCATION</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">EXPERIANCE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PROJECTS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          education.map((education, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...education}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          experiance.map((experiance, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...experiance}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((projects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects}
                                />
                            )
                          })
                        }
                      </Row> </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
