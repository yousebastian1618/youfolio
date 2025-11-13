import styles from './styles.module.scss';
import Title from "@/components/Title/Title";
import {ProfessionalExperiences, YouSkills} from "@/objects/objects";
import Skill from "@/app/(home)/_components/Experiences/_components/Skill/Skill";
import ProfessionalExperience from "@/app/(home)/_components/Experiences/_components/ProfessionalExperience/ProfessionalExperience";
import {useEffect, useRef} from "react";

export default function Experiences() {

  const languages = YouSkills.filter(
    (skill) => skill.type === 'language');
  const frameworks = YouSkills.filter(
    (skill) => skill.type === 'framework');

  languages.sort((a, b) => b.proficiency - a.proficiency);
  frameworks.sort((a, b) => b.proficiency - a.proficiency);

  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add(styles.fadeInStyle);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
    })
  }, [])

  return (
    <div className={styles.container}>
      <Title title={'You Experience.'} color={'purple'} layout={'left'} />
      <div className={styles.experiencesContainer}>
        {ProfessionalExperiences.map((experience, index) => {
          return (
            <div key={index}
                 className={styles.experience}
                 ref={(el: HTMLDivElement | null) => {
                   refs.current[index] = el;
                 }}
            >
              <ProfessionalExperience experience={experience} />
            </div>
          )
        })}
      </div>
      <div className={`${styles.skill} text-[var(--main-yellow)]`}>
        Technical Skills
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.frameworks}>
          <div className={`${styles.skillTitle}`}>Frameworks</div>
          <div className={styles.skills}>
            {frameworks.map((skill, i) => {
              return <Skill key={i} skill={skill} />
            })}
          </div>
        </div>
        <div className={styles.languages}>
          <h3 className={`${styles.skillTitle}`}>Languages</h3>
          <div className={styles.skills}>
            {languages.map((skill, i) => {
              return <Skill key={i} skill={skill} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}