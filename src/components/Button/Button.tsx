import styles from './styles.module.scss';
import type { Button } from "@/types/types";
import Image from "next/image";

type Props = {
  button: Button
  clickEvent: () => void;
  loading?: boolean;
}

export default function ButtonComponent({ button, clickEvent, loading }: Props) {

  const handleClick = () => {
    clickEvent();
  }

  return (
    <button type='button'
            className={styles.button}
            onClick={() => handleClick()}
    >
      {loading ? (
        <div className={styles.loadingContainer}>
          <Image
            className={styles.loading}
            src={'/loading.gif'}
            alt="loading"
            fill
            draggable={false}
          />
        </div>
      ) : (
        <div>{button.label}</div>
      )}
    </button>
  )
}