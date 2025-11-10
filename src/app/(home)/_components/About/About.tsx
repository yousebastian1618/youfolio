import styles from './styles.module.scss';
import Title from "@/components/Title/Title";
import {AboutMe} from "@/objects/objects";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.introContainer}>
        <Title title={'About Me.'} color={'purple'} layout={'left'} />
        <p
          className={styles.aboutMe}
          dangerouslySetInnerHTML={{ __html: AboutMe}}
        />
      </div>
      <div className={styles.introImagesContainer}>
        {[...Array(4)].map((_, i) => {
          return (
            <div key={i} className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={`/about/about-me${i+1}.png`}
                alt={`About me ${i+1}`}
                fill
                draggable={false}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}