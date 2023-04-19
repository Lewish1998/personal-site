const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} target="_blank" rel="noreferrer" href="https://github.com/Lewish1998">
        <i className="fa-brands fa-github" aria-hidden="true" title="Lewis Halstead's GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lewis-halstead/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Lewis Halstead's LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
