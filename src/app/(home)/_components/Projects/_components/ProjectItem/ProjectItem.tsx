import styles from './styles.module.scss';
import type { Project } from '@/types/types';
import Image from "next/image";
import Techs from "@/app/(home)/_components/Projects/_components/Techs/Techs";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Link from "next/link";

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
          sizes="100vw"
          draggable={false}
        />
      </div>
      <div className={styles.projectInfo}>
        <h2
          className={styles.projectTitle}
          style={{ color: project.color }}
        >
          {project.url !== '' ? (
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              {project.label}
            </Link>
          ) : project.label}
        </h2>
        <div className={styles.projectDescription}>
          <p dangerouslySetInnerHTML={{ __html: project.description}} />
        </div>
        {project.progress !== 100 ? (
          <ProgressBar progress={project.progress} />
        ) : (<></>)}
        <Techs techs={project.techs} />
      </div>
    </div>
  )
}