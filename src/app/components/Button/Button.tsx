import type { ButtonProps } from "@/app/types";
import styles from "./Button.module.css";

/**
 * Renders button
 * @param {string} description - button description
 */
export default function Button({ description }: ButtonProps) {
  return <button className={styles.button}>{description}</button>;
}
