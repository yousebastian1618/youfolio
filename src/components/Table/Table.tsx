import styles from './styles.module.scss';
import Image from "next/image";
import {TechLogoMap} from "@/objects/objects";

type Props = {
  table: Record<string, string | number>[]
}

export default function Table({ table }: Props) {

  const heads = table.map((elem, i) => elem.head);
  const elements = table.map(({ head, ...elements}) => elements);

  return (
    <table className={styles.container}>
      <thead>
      {heads.map((head, i) => {
        return (
          <td key={i}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={TechLogoMap[head]}
                alt={head.toString()}
                fill
                draggable={false}
              />
            </div>
          </td>

        )
      })}
      </thead>
      <tbody>
      {elements.map((element, i) => {
        return (
          <tr key={i}>
            {[...Array(10)].map((_, j) => {
              return (
                <td key={j}>safsaf</td>
              )
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}