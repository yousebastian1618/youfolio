import styles from './styles.module.scss';
import Image from "next/image";
import {NavigationBarItems} from "@/objects/objects";

export default function NavigationBar() {
  return (
    <div className={styles.navigationBarContainer}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={'/youfolio-dark-logo.png'}
          alt="Logo"
          fill
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