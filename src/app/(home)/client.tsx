'use client'
import styles from './styles.module.scss';
import NavigationBar from "@/app/(home)/_components/NavigationBar/NavigationBar";
import Introduction from "@/app/(home)/_components/Introduction/Introduction";
import About from "@/app/(home)/_components/About/About";
import Projects from "@/app/(home)/_components/Projects/Projects";
import {useEffect, useRef, useState} from "react";
import Experiences from "@/app/(home)/_components/Experiences/Experiences";

export default function Home() {

  const introRef = useRef<HTMLDivElement | null>(null);
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShrunk(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (introRef.current) observer.observe(introRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.navigationBar}>
        <NavigationBar shrunk={shrunk} />
      </div>
      <div className={styles.introduction} ref={introRef}>
        <Introduction />
      </div>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.projects}>
        <Projects />
      </div>
      <div className={styles.skills}>
        <Experiences />
      </div>
    </>
  )
}