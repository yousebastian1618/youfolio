'use client'
import styles from './styles.module.scss';
import TechIcon from "@/components/TechIcon/TechIcon";

type Props = {
  techs: string[];
}

export default function Techs({ techs }: Props) {

  return (
    <div className={styles.container}>
      {techs.map((tech, index) => {
        return (
          <div key={index}>
            <TechIcon tech={tech} iconSize={'2.5ex'}/>
          </div>
        )
      })}
    </div>
  )
}