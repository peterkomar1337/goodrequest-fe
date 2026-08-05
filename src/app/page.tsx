import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";
import { StepsProvider } from "@/context/StepsContext";
import { Steps } from "@/components/Steps/Steps";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={`container ${styles.section}`}>
          <div className={styles.column}>
            <StepsProvider>
              <Steps />
            </StepsProvider>
            <div className={styles.footerWrapper}>
              <Footer />
            </div>
          </div>
          <div>
            <Image
              src="/images/dog.jpg"
              alt="Dog Image"
              width={602}
              height={984}
              className={styles.leadImage}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
