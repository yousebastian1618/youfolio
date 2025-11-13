'use client'
import styles from './styles.module.scss';
import NavigationBar from "@/app/(home)/_components/NavigationBar/NavigationBar";
import Introduction from "@/app/(home)/_components/Introduction/Introduction";
import About from "@/app/(home)/_components/About/About";
import Projects from "@/app/(home)/_components/Projects/Projects";
import {useEffect, useRef, useState} from "react";
import Experiences from "@/app/(home)/_components/Experiences/Experiences";
import Footer from "@/app/(home)/_components/Footer/Footer";
import Contact from "@/app/(home)/_components/Contact/Contact";

export default function Home() {

  const introRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const experiencesRef = useRef<HTMLDivElement | null>(null);

  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const introEl = introRef.current;
    const aboutEl = aboutRef.current;
    const projectsEl = projectsRef.current;
    const experiencesEl = experiencesRef.current;

    if (!introEl || !aboutEl || !projectsEl || !experiencesEl) return;

    const introObserver = new IntersectionObserver(
      ([entry]) => {
        setShrunk(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutEl.classList.add(styles.fadeInStyle);
        }
      }
    )

    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsEl.classList.add(styles.fadeInStyle);
        }
      }
    )

    const experiencesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experiencesEl.classList.add(styles.fadeInStyle);
        }
      }
    )

    introObserver.observe(introEl);
    aboutObserver.observe(aboutEl);
    projectsObserver.observe(projectsEl);
    experiencesObserver.observe(experiencesEl);
    return () => {
      introObserver.disconnect();
      aboutObserver.disconnect();
      projectsObserver.disconnect();
      experiencesObserver.disconnect();
    }
  }, []);

  return (
    <>
      <div className={styles.nav} ref={introRef}>
        <div className={styles.navigationBar}>
          <NavigationBar shrunk={shrunk} />
        </div>
        <div className={styles.introduction}>
          <Introduction />
        </div>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.about} ref={aboutRef}>
          <About />
        </div>
        <div className={styles.projects} ref={projectsRef}>
          <Projects />
        </div>
        <div className={styles.experiences} ref={experiencesRef}>
          <Experiences />
        </div>
        <div className={styles.contact}>
          <Contact />
        </div>
      </div>
      <hr />
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}