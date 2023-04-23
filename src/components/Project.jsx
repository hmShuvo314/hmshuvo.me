import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import projects from "../assets/images/projects.png";
import { ProjectStyles } from "../styles/ProjectsStyles";

const allProjects = [
  {
    name: "Cryptobyte",
    details:
      "Cryptobyte is an all-in-one platform to get the most up-to-date information about all the crypto currencies in the world.It helps users to track crypto currencies and make thoughtful decision on whether to invest in them best on their trends.",
    link: "https://cryptobyte-shuvo.vercel.app/",
    github: "https://github.com/hmShuvo314/Cryptobyte",
  },
  {
    name: "Nick | Chatbot",
    details:
      "Nick is an AI chatbot that uses machine learning model to answer customer queries. It is built using Python 3, Pytorch, and has been integrated to a Flask server to handle incoming query request",
    link: "https://www.weekendtrendz.com/#chat",
    github: "https://github.com/hmShuvo314/chatbot-py",
  },
  {
    name: "Typer",
    details:
      "Typer is a minimalist app for practicing typing. Users can practice their typing speed and accuracy and get the results accordingly",
    link: "https://typer-shuvo.vercel.app/",
    github: "https://github.com/hmShuvo314/typer",
  },
  {
    name: "Logophiles",
    details:
      "Logophiles is a vocabulary game. Users have to fill in the blanks of a particular word correctly to get a point. To answer each of the word correctly, there are 15 seconds allocated. ",
    link: "https://logophiles-shuvo.vercel.app/",
    github: "https://github.com/hmShuvo314/logophiles",
  },
  {
    name: "Pong",
    details:
      "It is a browser based pong game. The user can play against the computer and each time the computer misses the ball, the user gets one point and vice versa.",
    link: "https://pong-shuvo.vercel.app/",
    github: "https://github.com/hmShuvo314/pong",
  },
  {
    name: "Whack A Mole",
    details:
      "It is a browser based whack a mole game. Each time the user manages to hit a mole, he receives one point. There is a total of 20 seconds allocated and after that the game is over.",
    link: "https://whack-a-mole-shuvo.vercel.app/",
    github: "https://github.com/hmShuvo314/whack-a-mole",
  },
  {
    name: "HTTP server in GO",
    details:
      "This http server is written entirely in go and uses the Gin backend framework to handle incoming request and respond to them accrodingly. It's capable of doing all sort of CRUD operation",
    link: "https://github.com/hmShuvo314/GO_api",
    github: "https://github.com/hmShuvo314/GO_api",
  },
];

const Projects = () => {
  return (
    <div className="page" id="projects">
      <ProjectStyles className="border-area">
        <div className="page-title">
          <img src={projects} alt="" className="image-3d" />
          <div className="title">
            <h1 className="gradient">My work experiences!</h1>

            <p className="styled">
              I started web development in early 2020 and by now I have over 1.5
              years of professional experience in developing Full-Stack Web apps
              and cross-platform Mobile and Desktop apps as Software Engineer
            </p>
          </div>
        </div>

        <div className="all-experience">
          <div className="wrapper">
            <div className="item reverse">
              <div className="item_title">
                <a href="https://codefiz.com/" target="_blank">
                  <h1 className="right">Possier</h1>
                </a>
                <h2 className="text-2xl">Software Engineer</h2>
              </div>
              <div className="item_details">
                <p>
                  Led the development of Possier 2.0, a trending restaurant
                  billing POS software in India, while also spearheading the
                  creation of Fuvii, an experimental social media app for food
                  enthusiasts.
                </p>
              </div>
            </div>
            <div className="timeline right">
              <h6>April 2022 - Present</h6>
            </div>
          </div>
          <div className="wrapper">
            <div className="item">
              <div className="item_title">
                <a href="https://codefiz.com/" target="_blank">
                  <h1 className="right">CodeFiz</h1>
                </a>
                <h2 className="text-2xl">Founder</h2>
              </div>
              <div className="item_details">
                <p>
                  CodeFiz is a next generation code collaboration tool and a
                  perfect choice for college students and hiring managers alike
                  who can easily and smoothly hold live coding sessions and
                  coding interviews using the app.
                </p>
              </div>
            </div>
            <div className="timeline left">
              <h6>Jan 2022 - Present</h6>
            </div>
          </div>

          <div className="wrapper">
            <div className="timeline right">
              <h6>July 2021 - Mar 2022</h6>
            </div>
            <div className="item reverse">
              <div className="item_title">
                <a href="https://www.weekendtrendz.com/" target="_blank">
                  <h1>Weekend Trendz</h1>
                </a>
                <h2 className="text-xl">Full Stack Developer</h2>
              </div>

              <div className="item_details">
                <p>
                  Designed and developed the e-commerce application of the
                  company from start to finish with utmost user-happiness,
                  security and cost-effectiveness in mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="all-projects">
          {allProjects.map(({ name, details, link, github }) => (
            <div className="project">
              <div className="wrapper1">
                <h1>{name}</h1>
                <div className="detail">
                  <p>{details}</p>
                </div>

                <div className="links">
                  <a href={github} target="_blank">
                    <BsGithub />
                  </a>
                  <a href={link} target="_blank">
                    <HiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ProjectStyles>
    </div>
  );
};

export default Projects;
