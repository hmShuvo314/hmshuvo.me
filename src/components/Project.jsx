import { ProjectStyles } from "../styles/ProjectsStyles";
import projects from "../assets/images/projects.png";

const Projects = () => {
  const allProjects = [
    {
      name: "Cryptobyte",
      details:
        "Cryptobyte is an all-in-one platform to get the most up-to-date information about all the crypto currencies in the world.It helps users to track crypto currencies and make thoughtful decision on whether to invest in them best on their trends.",
      link: "",
    },
    {
      name: "Typer",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, modi eaque quo labore doloribus temporibus? Nisi deleniti quibusdam veritatis amet itaque, ullam libero explicabo voluptatibus voluptatem vel quam magnam id!",
      link: "",
    },
    {
      name: "Logophilic",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, esse. Alias quod id aspernatur aut at, laboriosam ab? Soluta quis eos architecto quaerat praesentium error velit magni earum fuga recusandae.",
      link: "",
    },
  ];
  return (
    <div className="page">
      <ProjectStyles className="border-area">
        <div className="page-title">
          <img src={projects} alt="" className="image-3d" />
          <div className="title">
            <h1 className="gradient">My work experiences!</h1>

            <p className="styled">
              I started web development in early 2020 and by now I have over 8
              months of professional experience as a full stack web developer
            </p>
          </div>
        </div>

        <div className="all-experience">
          <div className="wrapper">
            <div className="item">
              <div className="item_title">
                <a href="https://intercode.vercel.app/" target="_blank">
                  <h1 className="right">InterCode</h1>
                </a>
                <h2>Founder & CEO</h2>
              </div>
              <div className="item_details">
                <p>
                  InterCode is a next generation code collaboration tool. It is
                  free and open source and a perfect choice for college students
                  and hiring managers alike who can easily and smoothly hold
                  live coding sessions and coding interviews using the app.
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
                <h2>Full Stack Developer</h2>
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
          {allProjects.map(({ name, details, link }) => (
            <div className="project">
              <a href={link}>
                <h1>{name}</h1>
              </a>
              <p>{details}</p>
            </div>
          ))}
        </div>
      </ProjectStyles>
    </div>
  );
};

export default Projects;
