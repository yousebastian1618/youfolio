import styles from './styles.module.scss';

export default function Intro() {
  return (
    <div className={styles.container}>
      <span className={styles.intro}>
        <div id={styles.line1}>
          Hello, I'm&nbsp;<b>Sebastian</b>. &nbsp;<div id={styles.line}></div>
        </div>
        <div id={styles.line2}>I turn ideas into elegant, scalable digital experiences.</div>
      </span>
    </div>
  )
}
