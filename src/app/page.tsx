import Image from "next/image";
import { Footer } from "@/components/Footer/Footer";
import styles from "./page.module.scss";
import "@/context/StepsContext";
import { Steps } from "@/components/Steps/Steps";

export default function Home() {
  return (
    <main>
      <div className={styles.wrapper}>
        <section className={`container ${styles.section}`}>
          <div>
            <Steps />
            <Footer />
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
