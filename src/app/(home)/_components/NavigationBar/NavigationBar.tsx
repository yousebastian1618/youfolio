import styles from './styles.module.scss';
import Image from "next/image";
import {NavigationBarItems} from "@/objects/objects";

type Props = {
  shrunk: boolean;
}

export default function NavigationBar({ shrunk }: Props) {
  return (
    <div className={`${styles.navigationBarContainer} ${shrunk ? styles.shrunk : ''}`}>
      <div className={`${styles.imageContainer} ${shrunk ? styles.shrunkLogo : ''}`}>
        <Image
          className={styles.image}
          src={'/youfolio-dark-logo.png'}
          alt="Logo"
          fill
          sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 10vw"
          draggable={false}
        />
      </div>
      <div className={styles.navigationBarItemsContainer}>
        {NavigationBarItems.map((item) => {
          return (
            <span key={item.name}>{item.label}</span>
          )
        })}
      </div>
    </div>
  )
}