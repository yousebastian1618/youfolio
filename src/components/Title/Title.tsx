import styles from './styles.module.scss';

type Props = {
  title: string;
  color: string;
  layout: 'left' | 'right';
}

export default function Title({ title, color, layout }: Props) {

  let title1 = title.split(' ')[0];
  let title2 = title.split(' ')[1];

  return (
    <div className={layout === 'left' ? styles.container : styles.containerRight}>
      <span className={styles.title1}>
        {title1}
      </span>
      <span className={color === 'purple' ? styles.title2Purple : styles.title2Yellow}>
        {title2}
      </span>
    </div>
  )
}