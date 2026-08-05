import { ReactNode } from "react";
import { Footer } from "@/components/Footer/Footer";
import styles from "./layout.module.scss";

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.inner}`}>
        {children}
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
