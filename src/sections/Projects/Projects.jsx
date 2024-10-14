import styles from "./ProjectsStyles.module.css";
import kasa from "../../assets/Kasa-maison.jpg";
import kanap from "../../assets/kanap-blue.jpg";
import montagne from "../../assets/En montagne randonné.png";
import ProjectCard from "../../common/ProjectCard";
import connection from "../../assets/Connection.png";

const Projects = () => {
     return (
          <section id="projects" className={styles.container}>
               <h1 className="sectionTitle">Projets</h1>
               <div className={styles.projectsContainer}>
                    <ProjectCard
                         src={kasa}
                         link={"https://github.com/MeddyBalont/Kasa_Projet_Final"}
                         h3="Kasa"
                         p="Application web"
                         target="_blank"
                    />
                    <ProjectCard
                         src={kanap}
                         link={"https://github.com/MeddyBalont/kanap"}
                         h3="Kanap"
                         p="Site e-commerce"
                         target="_blank"
                    />
                    <ProjectCard
                         src={montagne}
                         link={"https://meddybalont.github.io/En_montagne/"}
                         h3="En montagne"
                         p="Site vitrine"
                         target="_blank"
                    />
                    <ProjectCard
                         src={connection}
                         link={"https://meddybalont.github.io/Helium/"}
                         h3="Helium"
                         p="Site vitrine"
                         target="_blank"
                    />
               </div>
          </section>
     );
};

export default Projects;
