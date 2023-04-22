import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Lewis\ Halstead\ CV\ .pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Lewis\ Halstead\ CV.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container">
      <div className="row">
        <motion.div
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Junior Software Developer</h4>
            <p className="description">Highly ambitious junior software developer with experience in frontend, backend and full-stack development. Over 2 years of experience in retail management with the ability to work collaboratively and effectively in teams and achieve a consistent level of high standards in fast-paced environments.
            Currently studying Professional Software Development at CodeClan Glasgow and working as a Deputy Store Manager at ALDI.</p>

            <div className="infoContainer ">
              <h4>Skills</h4>
              <ul className="description skills-icons">
                <li>Python</li>
                <li>Flask</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Node.js</li>
                <li>Java</li>
                <li>Spring</li>
                <li>Mongodb</li>
                <li>PSQL</li>
                <li>Express</li>
                <li>Git</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Lewis Halstead</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download CV"}
              </button>
              <SocialIcons />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
