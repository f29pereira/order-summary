import styles from "./Card.module.css";
import type { CardProps } from "@/app/types";
import Image from "next/image";
import Button from "../Button/Button";

/**
 * Renders Card with Image Header and Body
 * @param {string} imgSrc        - image source
 * @param {string} imgAlt        - image alt text
 * @param {string} title         - card title
 * @param {string} description   - card description
 * @param {ReactNode} annualPlan - AnnualPlan component
 */
export default function Card({
  imgSrc,
  imgAlt,
  title,
  description,
  annualPlan,
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
        {annualPlan}
        <Button description="Proceed to Payment" />
        <a href="" className={styles.cancelOrder}>
          Cancel Order
        </a>
      </section>
    </div>
  );
}
