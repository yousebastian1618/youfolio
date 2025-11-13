import styles from './styles.module.scss';
import Title from "@/components/Title/Title";
import {ProjectItems} from "@/objects/objects";
import ProjectItem from "@/app/(home)/_components/Projects/_components/ProjectItem/ProjectItem";
import {useEffect, useRef} from "react";

export default function Projects() {

  const projectsRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    projectsRefs.current.forEach((el) => {
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
    });
  }, []);

  return (
    <div className={styles.container}>
      <Title title={"You Projects."} color={'yellow'} layout={'left'} />
      <div className={styles.projectsContainer}>
        {ProjectItems.map((project, index) => {
          return (
            <div key={index} className={styles.project} ref={(el: HTMLDivElement | null) => {
              projectsRefs.current[index] = el;
            }}>
              <ProjectItem key={index} project={project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}