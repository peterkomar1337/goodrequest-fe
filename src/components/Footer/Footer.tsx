import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href="/"
        className={styles.logo}
        aria-label="Nadácia Good Boy, domov"
      >
        <Image
          src={"/images/logo.svg"}
          width={124}
          height={32}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </Link>

      <nav aria-label="Pätička" className={styles.navWrapper}>
        <ul className={styles.socials} role="list">
          <li>
            <Link
              href="https://www.facebook.com/goodrequest"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={"/images/icons/facebook.svg"}
                width={16}
                height={16}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/goodrequest"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={"/images/icons/instagram.svg"}
                width={16}
                height={16}
                style={{ objectFit: "contain" }}
                alt=""
              />
            </Link>
          </li>
        </ul>
        <ul className={styles.nav} role="list">
          <li>
            <Link href="/kontakt" className={styles.link}>
              Kontakt
            </Link>
          </li>
          <li>
            <Link href="/o-projekte" className={styles.link}>
              O projekte
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
