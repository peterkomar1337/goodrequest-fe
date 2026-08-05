"use client";

import { useStats } from "@/hooks/useStats";
import { useCountUp } from "@/hooks/useCountUp";
import styles from "./DonationStats.module.scss";

const amountFormatter = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
});

export function DonationStats() {
  const { data: stats, isError } = useStats();
  const contribution = useCountUp(stats?.contribution ?? 0);
  const contributors = useCountUp(stats?.contributors ?? 0);

  if (isError) {
    return (
      <p className={styles.state} role="alert">
        Štatistiku sa nepodarilo načítať.
      </p>
    );
  }

  return (
    <dl className={styles.stats}>
      <div className={styles.item}>
        <dt className={styles.term}>Celková vyzbieraná hodnota</dt>
        <dd className={styles.value}>{amountFormatter.format(contribution)}</dd>
      </div>
      <div className={styles.item}>
        <dt className={styles.term}>Počet darcov</dt>
        <dd className={styles.value}>{Math.round(contributors)}</dd>
      </div>
    </dl>
  );
}
