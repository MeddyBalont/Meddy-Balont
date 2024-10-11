import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Meddy_Front_Dev.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
     const { theme, toggleTheme } = useTheme();
     const themeIcon = theme === "light" ? sun : moon;
     const twitterIcon = theme === "light" ? twitterLight : twitterDark;
     const githubIcon = theme === "light" ? githubLight : githubDark;
     const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
     return (
          <section id="hero" className={styles.container}>
               <div className={styles.colorModeContainer}>
                    <img
                         className={styles.hero}
                         src={heroImg}
                         alt="Photo de profil de Meddy Balont"
                    />
                    <img
                         className={styles.colorMode}
                         src={themeIcon}
                         alt="Icone mode coleur"
                         onClick={toggleTheme}
                    />
               </div>
               <div className={styles.info}>
                    <h1>
                         Meddy
                         <br />
                         Balont
                    </h1>
                    <h2>Front-end Developer</h2>
                    <span>
                         <a href="https://x.com/MBalont">
                              <img src={twitterIcon} alt="Twitter icon" />
                         </a>

                         <a href="https://github.com/MeddyBalont">
                              <img src={githubIcon} alt="Github icon" />
                         </a>

                         <a href="https://www.linkedin.com/in/meddy-balont/">
                              <img src={linkedinIcon} alt="LinkedIn icon" />
                         </a>
                    </span>
                    <p className={styles.description}>
                         Je pense codes, je mange code et je vis pour le code.
                    </p>
               </div>
               <a href={CV} download>
                    <button className="hover" download>
                         Resume
                    </button>
               </a>
          </section>
     );
}

export default Hero;
