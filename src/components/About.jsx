import { AboutStyles } from "../styles/AboutStyles";
import me from "../assets/images/myself.jpg";

const About = () => {
  return (
    <div className="page">
      <AboutStyles className="border-area">
        <div className="page-title">
          <div className="image-3d">
            <img src={me} alt="" />
          </div>
          <div className="title">
            <h3 className="gradient">About myself</h3>
            <p>
              I started coding as a leisure activity but with time I became more
              and more passionate about it. I realized the power of programming
              in this day and edge and the potential of what I can do by coding
              to make people's life easier and smoother blew my mind. And now I
              love coding and want to share my knowledge and experience to help
              make the world a better place together.
            </p>
          </div>
        </div>

        <div className="contact"></div>
      </AboutStyles>
    </div>
  );
};

export default About;
