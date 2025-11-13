import styles from './styles.module.scss';
import Image from "next/image";
import {getDuration} from "@/lib/helper";
import Link from "next/link";

type Props = {
  experience: {
    employer: string;
    jobTitle: string;
    thumbnail: string;
    description: string;
    startDate: Date;
    endDate: Date;
    color: string;
    url: string;
  }
}

export default function ProfessionalExperience({ experience }: Props) {

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.topTitle}>
          <h2
            className={styles.experienceTitle}
            style={{ color: experience.color }}
          >
            <Link href={experience.url} target="_blank" rel="noopener noreferrer">
              {experience.employer}
            </Link>
          </h2>
          <div className={styles.experienceSubtitle}>
            { experience.jobTitle}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={experience.thumbnail}
            alt={experience.employer}
            fill
            draggable={false}
          />
        </div>
      </div>
      <div className={styles.experienceDescription}>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: experience.description }}
        >
        </div>
        <div className={styles.duration}>
          { getDuration(experience.startDate, experience.endDate) }
        </div>
      </div>
    </div>
  )
}
