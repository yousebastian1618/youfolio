import styles from './styles.module.scss';

type Props = {
  progress: number;
}

export default function ProgressBar({ progress }: Props) {

  const getProgress = () => {
    return {
      width: `${progress}%`
    };
  }

  return (
    <div className={styles.container}>
      <span className={styles.progressBar} style={getProgress()}>
      </span>
      <span className={styles.progress}>
        {progress}%
      </span>
    </div>
  )
}