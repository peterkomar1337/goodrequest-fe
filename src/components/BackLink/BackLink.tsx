import Link from "next/link";
import styles from "./BackLink.module.scss";

export function BackLink() {
  return (
    <Link href="/" className={styles.backLink}>
      <svg
        className={styles.icon}
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M14.3333 6H1M6 1L1 6L6 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Späť
    </Link>
  );
}
