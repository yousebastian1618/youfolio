'use client'
import styles from './styles.module.scss';
import Image from "next/image";
import {TechLogoMap} from "@/objects/objects";
import {useState} from "react";

type Props = {
  tech: string;
  iconSize: string;
}

export default function TechIcon({ tech, iconSize }: Props) {

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
       className={styles.logoContainer}
       style={{ width: iconSize }}
       onMouseOver={() => setHovering(true)}
       onMouseLeave={() => setHovering(false)}
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
          style={{ display: hovering ? "block" : "none" }}
        >
          {tech}
        </span>
      </div>
    </>
  )
}