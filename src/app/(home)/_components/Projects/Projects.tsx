import styles from './styles.module.scss';
import Title from "@/components/Title/Title";
import {ProjectItems} from "@/objects/objects";
import ProjectItem from "@/app/(home)/_components/Projects/_components/ProjectItem/ProjectItem";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Title title={'You Projects.'} color={'yellow'} layout={'right'} />
      <div className={styles.projectsContainer}>
        {ProjectItems.map((project, index) => {
          return <ProjectItem key={index} project={project} />;
        })}
      </div>
    </div>
  )
}