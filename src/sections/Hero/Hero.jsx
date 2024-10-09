import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedInIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/Meddy_Front_Dev.pdf";

function Hero() {
     return (
          <section id="hero" className={styles.container}>
               <div className={styles.colorModeContainer}>
                    <img
                         className={styles.hero}
                         src={heroImg}
                         alt="Photo de profil de Meddy Balont"
                    />
                    <img src={themeIcon} alt="Icone mode coleur" />
                    <div className={styles.info}>
                         <h1>
                              Meddy
                              <br /> Balont
                         </h1>
                         <h2>Front-end Developer</h2>
                         <span>
                              <a href="https://x.com/MBalont">
                                   <img src={twitterIcon} alt="Twitter icon" />
                              </a>
                         </span>
                         <span>
                              <a href="https://github.com/MeddyBalont">
                                   <img src={githubIcon} alt="Github icon" />
                              </a>
                         </span>
                         <span>
                              <a href="https://www.linkedin.com/in/meddy-balont/">
                                   <img src={linkedInIcon} alt="LinkedIn icon" />
                              </a>
                         </span>
                         <p>Je pense codes, je mange code et je vis pour le code.</p>
                    </div>
                    <a href={CV} download>
                         <button className="hover" download>
                              Resume
                         </button>
                    </a>
               </div>
          </section>
     );
}

export default Hero;
