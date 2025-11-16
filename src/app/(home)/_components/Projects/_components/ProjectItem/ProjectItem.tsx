import styles from './styles.module.scss';
import type { Project } from '@/types/types';
import Image from "next/image";
import Techs from "@/app/(home)/_components/Projects/_components/Techs/Techs";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Link from "next/link";
import {useModal} from "@/contexts/modalContext";
import React, {useState} from "react";

type Props = {
  project: Project
}

export default function ProjectItem({ project }: Props) {

  const { openModal } = useModal();
  const [currentThumbnail, setCurrentThumbnail] = useState<string>(project.thumbnail);

  const showSlides = () => {
    if (project.images && project.images.length === 0) {
      return;
    }
    openModal(
      'project',
      project.label,
      project.thumbnail,
      project.images
    )
  }

  const selectThumbnail = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, image: string) => {
    setCurrentThumbnail(curr => curr === image ? project.thumbnail : image);
    e.stopPropagation();
  }

  return (
    <div className={styles.container}>
      <div className={styles.thumbnailContainer} onClick={() => showSlides()}>
        <Image
          className={styles.thumbnail}
          src={currentThumbnail}
          alt={project.label}
          fill
          sizes="100vw"
          draggable={false}
        />
        <div className={styles.dots} onClick={(e) => e.stopPropagation()}>
          {project.images.map((image, index) => {
            return (
              <span
                key={index}
                className={`${styles.dot} ${currentThumbnail === image ? 'bg-white' : 'bg-transparent'}`}
                onClick={(e) => selectThumbnail(e, image)}
              >
              </span>
            )
          })}
        </div>
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