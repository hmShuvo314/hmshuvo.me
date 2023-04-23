import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AboutStyles } from "../styles/AboutStyles";

const contacts = [
  {
    Icon: BsLinkedin,
    link: "https://www.linkedin.com/in/hmshuvo314/",
    color: "#00a9ff",
  },
  {
    Icon: BsGithub,
    link: "https://github.com/hmShuvo314",
    color: "#000000",
  },
];

const About = () => {
  return (
    <div className="page" id="contact">
      <AboutStyles className="border-area">
        <div className="title">
          <h3 className="gradient">Contact Me</h3>
          <p className="styled">
            I am open to full-time Full-Stack Software Engineer role where I
            will be able to put my skills in practice and acquire more skills
            along the way!
          </p>
        </div>

        <a href="mailto:hmshuvo314@gmail.com" className="btn">
          <span>Email ME</span>
          <p className="link">hmshuvo314@gmail.com</p>
        </a>

        <div className="contacts">
          {contacts.map(({ link, Icon, color }) => (
            <a href={link} className="contact">
              <Icon style={{ color }} className="icon" />
              <span className="link">{link}</span>
            </a>
          ))}
        </div>
      </AboutStyles>
    </div>
  );
};

export default About;
