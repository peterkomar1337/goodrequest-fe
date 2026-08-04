import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo} aria-label="good-boy">
        <Image
          src={"/images/logo.svg"}
          width={124}
          height={32}
          style={{ objectFit: "contain" }}
          alt="logo-goodboy"
        />
      </Link>

      <nav aria-label="footer" className={styles.navWrapper}>
        <ul className={styles.socials}>
          <li>
            <Link href="/">
              <Image
                src={"/images/icons/facebook.svg"}
                width={16}
                height={16}
                style={{ objectFit: "contain" }}
                alt="facebook-icon"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image
                src={"/images/icons/instagram.svg"}
                width={16}
                height={16}
                style={{ objectFit: "contain" }}
                alt="instagram-icon"
              />
            </Link>
          </li>
        </ul>
        <ul className={styles.nav}>
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
