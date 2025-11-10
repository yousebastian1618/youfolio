'use client'
import styles from './styles.module.scss';
import Image from "next/image";
import {TechLogoMap} from "@/objects/objects";
import {useState} from "react";

type Props = {
  techs: string[];
}

export default function Techs({ techs }: Props) {

  const [hoveringIndex, setHoveringIndex] = useState(-1);

  return (
    <div className={styles.container}>
      {techs.map((tech, index) => {
        return (
          <div key={index}
               className={styles.logoContainer}
               onMouseOver={() => setHoveringIndex(index)}
               onMouseLeave={() => setHoveringIndex(-1)}
          >
            <Image
              className={styles.logo}
              src={TechLogoMap[tech]}
              alt={tech}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 220vw, 200vw"
              draggable={false}
            />
            <span
              className={styles.tooltip}
              style={{ display: hoveringIndex === index ? "block" : "none" }}
            >
              {tech}
            </span>
          </div>
        )
      })}
    </div>
  )
}