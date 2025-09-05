import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card/Card";
import AnnualPlan from "./components/AnnualPlan/AnnualPlan";

export default function Home() {
  return (
    <main className={`flex-full-center ${styles.background}`}>
      <section className={styles.paddingX}>
        <Card
          imgSrc="./images/illustration-hero.svg"
          imgAlt="Person listening to music and dancing"
          title="Order Summary"
          description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
          annualPlan={<AnnualPlan value="$59.99/year" link="#" />}
        />
      </section>
    </main>
  );
}
