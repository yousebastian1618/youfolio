import styles from './styles.module.scss';
import Image from "next/image";
import Intro from "@/app/(home)/_components/Introduction/Intro/Intro";

export default function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <Intro />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={'/introduction.png'}
          alt="Introduction"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 220vw, 200vw"
          draggable={false}
        />
      </div>
    </div>
  )
}