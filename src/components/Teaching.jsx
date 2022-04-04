import teach1 from "../assets/images/teach1.png";

const Teaching = () => {
  return (
    <div className="page">
      <div className="border-area">
        <div className="page-title">
          <div className="title">
            <h1 className="gradient">
              I teach, <em>we</em> learn!
            </h1>
            <p className="styled">
              I love to share my web development knowledge and experience with
              others. To me, teaching is just another form of learning!
            </p>
            <a href="#contact" className="btn">
              <span>Book A Class</span>
            </a>
          </div>
          <img src={teach1} alt="" className="image-3d" />
        </div>
      </div>
    </div>
  );
};

export default Teaching;
