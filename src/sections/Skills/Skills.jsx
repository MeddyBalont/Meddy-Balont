import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import checkMarkDark from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

const Skills = () => {
     const { theme } = useTheme();
     const checkMark = theme === "light" ? checkMarkDark : checkMarkIcon;
     return (
          <section id="skills" className={styles.container}>
               <h1 className="sectionTitle">Compétences</h1>
               <div className={styles.skillList}>
                    <SkillList src={checkMark} skill="HTML" />
                    <SkillList src={checkMark} skill="CSS" />
                    <SkillList src={checkMark} skill="Javascript" />
                    <SkillList src={checkMark} skill="Node" />
               </div>
               <hr />
               <div className={styles.skillList}>
                    <SkillList src={checkMark} skill="React" />
                    <SkillList src={checkMark} skill="Vite" />
                    <SkillList src={checkMark} skill="Sass" />
               </div>
               <hr />
               <div className={styles.skillList}>
                    <SkillList src={checkMark} skill="Git" />
                    <SkillList src={checkMark} skill="Github" />
                    <SkillList src={checkMark} skill="MongoDB" />
               </div>
          </section>
     );
};

export default Skills;
