import Typewriter from "typewriter-effect";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {

  return (
    <section className="landing" style={styles.landing}>
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>{name}</h1>



        <div className="description">

      {/* test */}

        <svg viewbox="0 0 100 20">
          <defs>
              <linearGradient id="gradient">
                <stop color="#00d3e3"/>
              </linearGradient>
            <pattern 
            id="wave" 
            x="0" y="-0" 
            width="100" 
            height="100%" 
            patternUnits="userSpaceOnUse">
              <path 
                id="wavePath" 
                d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" 
                mask="url(#mask)" 
                // fill="url(#gradient)"> 
                fill="#00d3e3"> 
                <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="40,0"
                    repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>

        <text 
          text-anchor="middle" 
          x="250" 
          y="20" 
          font-size="26" 
          fill="white" 
          fill-opacity="1">
          JUNIOR SOFTWARE DEVELOPER
        </text>
        <text 
          text-anchor="middle" 
          x="250" 
          y="20" 
          font-size="26" 
          fill="url(#wave)" 
          fill-opacity="1">
          JUNIOR SOFTWARE DEVELOPER
        </text>

        </svg>





          {/* Typewriter animation */}
          {/* <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
              .changeDelay(50)
              .typeString("Junior Software Developer")
              .start();
            }}
          /> */}
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};




const styles = {
  landing: {
    height: "calc(100% - 93px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  landingImage: {
    position: "absolute",
    bottom: "0",
    opacity: "0.3",
    mixBlendMode: "lighten",
    height: "80%",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    letterSpacing: "1px",
    textAlign: "center",
    zIndex: "1",
    color: "#fff",
    // textShadow: "1px 1px 3px #000",
  },

  name: {
    color: "#fff",
    fontWeight: "700",
    marginTop: "-100px",
    paddingBottom: "28px",
  },
};

export default Landing;
