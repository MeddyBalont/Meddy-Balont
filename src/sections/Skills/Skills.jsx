import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

const Skills = () => {
     return (
          <section id="skills" className={styles.container}>
               <h1 className="sectionTitle">Compétences</h1>
               <div className={styles.skillList}>
                    <SkillList src={checkMarkIcon} skill="HTML" />
                    <SkillList src={checkMarkIcon} skill="CSS" />
                    <SkillList src={checkMarkIcon} skill="Javascript" />
                    <SkillList src={checkMarkIcon} skill="Node" />
               </div>
               <hr />
               <div className={styles.skillList}>
                    <SkillList src={checkMarkIcon} skill="React" />
                    <SkillList src={checkMarkIcon} skill="Vite" />
                    <SkillList src={checkMarkIcon} skill="Sass" />
               </div>
               <hr />
               <div className={styles.skillList}>
                    <SkillList src={checkMarkIcon} skill="Git" />
                    <SkillList src={checkMarkIcon} skill="Github" />
                    <SkillList src={checkMarkIcon} skill="MongoDB" />
               </div>
          </section>
     );
};

export default Skills;
