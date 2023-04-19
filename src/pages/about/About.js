import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, email }) => {
  return (
    <section className="about">
      <PageHeader title="About Me"/>
      <AboutMe name={name} location={location} email={email} />
    </section>
  );
};

export default About;
