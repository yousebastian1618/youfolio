import styles from './styles.module.scss';
import TechIcon from "@/components/TechIcon/TechIcon";

type Props = {
  skill: {
    head: string,
    yearsOfExperience: number,
    proficiency: number,
    type: string
  }
}

export default function Skill({ skill }: Props) {

  const starNumber = 5;
  const wholeStars = Math.floor(skill.proficiency);
  const decimalStars = skill.proficiency - wholeStars;

  return (
    <div className={styles.container}>
      <TechIcon tech={skill.head} iconSize={'4ex'} />
      <div className={styles.proficiency}>
        {[...Array(starNumber)].map((_, i) => {
          if (i < wholeStars) {
            return (
            <div key={i} className={styles.star}></div>
            )
          } return (
            <div key={i} className={styles.decimalStars}>
              <div
                className={styles.decimalStarStyle}
                style={{ width: `${decimalStars * (wholeStars === i ? 100 : 0)}%` }}
              ></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}