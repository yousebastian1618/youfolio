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

  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const introEl = introRef.current;
    const aboutEl = aboutRef.current;

    if (!introEl || !aboutEl) return;

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

    introObserver.observe(introEl);
    aboutObserver.observe(aboutEl);
    return () => {
      introObserver.disconnect();
      aboutObserver.disconnect();
    }
  }, []);

  const handleQuicklinkClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <>
      <div className={styles.nav} ref={introRef}>
        <div className={styles.navigationBar}>
          <NavigationBar shrunk={shrunk} onQuickLinkClick={(sectionId: string) => handleQuicklinkClick(sectionId)}/>
        </div>
        <div className={styles.introduction}>
          <Introduction />
        </div>
      </div>
      <div className={styles.mainBody}>
        <div className={styles.about} id='about' ref={aboutRef}>
          <About />
        </div>
        <div className={styles.projects} id='projects'>
          <Projects />
        </div>
        <div className={styles.experiences} id='experiences'>
          <Experiences />
        </div>
        <div className={styles.contact} id='contact'>
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