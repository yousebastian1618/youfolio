import styles from './styles.module.scss';
import NavigationBar from "@/app/(home)/_components/NavigationBar/NavigationBar";
import Introduction from "@/app/(home)/_components/Introduction/Introduction";
import About from "@/app/(home)/_components/About/About";
import Projects from "@/app/(home)/_components/Projects/Projects";

export default function Home() {
  return (
    <>
      <div className={styles.navigationBar}>
        <NavigationBar />
      </div>
      <div className={styles.introduction}>
        <Introduction />
      </div>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
    </>
  )
}