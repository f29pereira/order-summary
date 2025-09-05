import styles from "./Card.module.css";
import type { CardProps } from "@/app/types";
import Image from "next/image";

/**
 * Renders Card with Image Header and Body
 * @param {string} imgSrc        - image source
 * @param {string} imgAlt        - image alt text
 * @param {string} title         - card title
 * @param {string} description   - card description
 */
export default function Card({
  imgSrc,
  imgAlt,
  title,
  description,
}: CardProps) {
  return (
    <div className={styles.card}>
      {/*Card header image*/}
      <header>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={450}
          height={220}
          priority={true}
          className={styles.cardImg}
        />
      </header>

      {/*Card body*/}
      <section className={`flex-col-center ${styles.cardBody}`}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
      </section>
    </div>
  );
}
