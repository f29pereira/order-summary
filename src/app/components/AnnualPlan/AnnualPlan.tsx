import styles from "./AnnualPlan.module.css";
import type { AnnualPlanProps } from "@/app/types";

/**
 * Renders Annual Plan with plan value and change plan link
 * @param {string} value - annual plan value
 * @param {string} link  - change plan link
 */
export default function AnnualPlan({ value, link }: AnnualPlanProps) {
  return (
    <div className={styles.planCont}>
      <div className={styles.planIconValueCont}>
        <img
          className={styles.planIcon}
          src="./images/icon-music.svg"
          alt="Music Icon"
        />
        <div>
          <h2 className={styles.planTitle}>Annual Plan</h2>
          <span className={styles.planValue}>{value}</span>
        </div>
      </div>

      <a href={link} className={styles.planChange}>
        Change
      </a>
    </div>
  );
}
