import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";

const Projects = () => {
     return (
          <section id="projects" className={styles.container}>
               <h1 className="sectionTitle">Projects</h1>
               <div className={styles.projectsContainer}>
                    <ProjectCard
                         src={viberr}
                         link={"https://meddybalont.github.io/En_montagne/"}
                         h3="à changer"
                         p="Site vitrine"
                    />
                    <ProjectCard
                         src={freshBurger}
                         link={"https://meddybalont.github.io/En_montagne/"}
                         h3="à changer"
                         p="à changer"
                    />
                    <ProjectCard
                         src={hipsster}
                         link={"https://meddybalont.github.io/En_montagne/"}
                         h3="à changer"
                         p="à changer"
                    />
                    <ProjectCard
                         src={fitlift}
                         link={"https://meddybalont.github.io/En_montagne/"}
                         h3="à changer"
                         p="à changer"
                    />
               </div>
          </section>
     );
};

export default Projects;
