"use client";

import { useStats } from "@/hooks/useStats";
import styles from "./DonationStats.module.scss";

const amountFormatter = new Intl.NumberFormat("sk-SK", {
  style: "currency",
  currency: "EUR",
});

export function DonationStats() {
  const { data: stats, isError } = useStats();

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
        <dd className={styles.value}>
          {amountFormatter.format(stats?.contribution ?? 0)}
        </dd>
      </div>
      <div className={styles.item}>
        <dt className={styles.term}>Počet darcov</dt>
        <dd className={styles.value}>{stats?.contributors ?? 0}</dd>
      </div>
    </dl>
  );
}
