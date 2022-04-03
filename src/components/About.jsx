import { AboutStyles } from "../styles/AboutStyles";
import me from "../assets/images/myself.jpg";

const About = () => {
  return (
    <div className="page">
      <AboutStyles className="border-area">
        <div className="page-title">
          <div className="title">
            <h3 className="gradient">Contact Me</h3>
            <p className="styled">
              I am open to any full time, part time job or freelance projects
              where I will be able to put my skills in practice and acquire more
              skills along the way!
            </p>
          </div>
        </div>

        <div className="contact"></div>
      </AboutStyles>
    </div>
  );
};

export default About;
