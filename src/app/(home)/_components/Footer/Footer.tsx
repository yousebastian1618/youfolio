import styles from './styles.module.scss';
import Image from "next/image";
import {CopyRight, NavigationBarItems, SocialMedias} from "@/objects/objects";
import Icon from "@/components/Icon/Icon";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logo}
          src={'/youfolio-dark-logo.png'}
          alt={"Youfolio"}
          fill
          draggable={false}
        />
      </div>
      <div className={styles.quickLinkContainer}>
        {NavigationBarItems.map((item, index) => {
          return <span key={index} className={styles.quickLink}>{item.label}</span>
        })}
      </div>
      <div className={styles.socialMediaContainer}>
        {SocialMedias.map((socialMedia, index) => {
          return (
            <div key={index} className={styles.iconContainer}>
              <Icon icon={socialMedia.icon} />
            </div>
          )
        })}
      </div>
      <p className={'text-center'}>{ CopyRight }</p>
    </div>
  )
}