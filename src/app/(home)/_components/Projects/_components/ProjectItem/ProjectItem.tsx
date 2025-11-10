import styles from './styles.module.scss';
import type { Project } from '@/types/types';
import Image from "next/image";
import Techs from "@/app/(home)/_components/Projects/_components/Techs/Techs";

type Props = {
  project: Project
}

export default function ProjectItem({ project }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailContainer}>
        <Image
          className={styles.thumbnail}
          src={project.thumbnail}
          alt={project.label}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          draggable={false}
        />
      </div>
      <div className={styles.projectInfo}>
        <h2
          className={styles.projectTitle}
          style={{ color: project.color }}
        >
          {project.label}
        </h2>
        <div className={styles.projectDescription}>
          <p dangerouslySetInnerHTML={{ __html: project.description}} />
        </div>
        <Techs techs={project.techs} />
      </div>
    </div>
  )
}