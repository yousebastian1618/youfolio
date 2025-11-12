import styles from './styles.module.scss';
import Title from "@/components/Title/Title";
import Image from "next/image";
import Form from "@/components/Form/Form";
import {ContactForm} from "@/objects/forms";
import {ContactButtons} from "@/objects/buttons";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Title title={'Contact You'} color={'yellow'} layout={'right'} />
      <div className={styles.subTitle}>
        HAVE SOME QUESTIONS?
      </div>
      <div className={styles.formContainer}>
        <div className={styles.squareBackground}>

        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={'/contact.png'}
            alt='Contact'
            fill
            draggable={false}
          />
        </div>
        <div className={styles.form}>
          <Form form={ContactForm} buttons={ContactButtons} />
        </div>
      </div>
    </div>
  )
}