import styles from './styles.module.scss';
import type { Button } from "@/types/types";

type Props = {
  button: Button
}

export default function ButtonComponent({ button }: Props) {

  const handleClick = () => {
    console.log(button);
  }

  return (
    <button type='button'
            className={styles.button}
            onClick={() => handleClick()}
    >
      {button.label}
    </button>
  )
}