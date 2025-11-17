import styles from './styles.module.scss';
import Title from "@/components/Title/Title";
import {ProjectItems} from "@/objects/objects";
import ProjectItem from "@/app/(home)/_components/Projects/_components/ProjectItem/ProjectItem";
import {useEffect, useRef} from "react";
import {useProjects} from "@/hooks/useProjects";

export default function Projects() {

  const projectsRefs = useRef<(HTMLDivElement | null)[]>([])
  const { bannerData, ceData, vniData, xConnectData } = useProjects();

  const projects = ProjectItems.map((project) => {
    let images = project.images ?? [];

    if (project.name === 'BannerCMS' && bannerData) {
      images = bannerData;
    } else if (project.name === 'CreativeEngine' && ceData) {
      images = ceData;
    } else if (project.name === 'XConnect' && xConnectData) {
      images = xConnectData;
    } else if (project.name === 'VitaliNutritionInc' && vniData) {
      images = vniData;
    }

    return { ...project, images };
  });

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
        {projects.map((project, index) => {
          return (
            <div key={index} className={styles.project} ref={(el: HTMLDivElement | null) => {
              projectsRefs.current[index] = el;
            }}>
              <ProjectItem project={project} />
            </div>
          )
        })}
      </div>
    </div>
  )
}