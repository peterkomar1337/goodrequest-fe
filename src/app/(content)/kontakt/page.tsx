import type { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import { BackLink } from "@/components/BackLink/BackLink";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Kontakt | Nadácia Good Boy",
  description:
    "Napíšte nám, zavolajte alebo sa zastavte v našej kancelárii v Žiline.",
};

const MailIcon = (
  <svg viewBox="0 0 22 18" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = (
  <svg viewBox="0 0 18 22" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21C13 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 5 17 9 21Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = (
  <svg viewBox="0 0 21 21" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M6.45059 7.29866C7.14659 8.74828 8.09537 10.1069 9.29695 11.3085C10.4985 12.5101 11.8572 13.4589 13.3068 14.1549C13.4315 14.2147 13.4938 14.2447 13.5727 14.2677C13.8531 14.3494 14.1973 14.2907 14.4348 14.1207C14.5016 14.0728 14.5587 14.0157 14.673 13.9014C15.0226 13.5518 15.1975 13.377 15.3732 13.2627C16.0361 12.8317 16.8907 12.8317 17.5536 13.2627C17.7294 13.377 17.9042 13.5518 18.2538 13.9014L18.4486 14.0962C18.9801 14.6277 19.2458 14.8934 19.3902 15.1788C19.6772 15.7463 19.6772 16.4166 19.3902 16.9842C19.2458 17.2695 18.9801 17.5353 18.4486 18.0667L18.291 18.2243C17.7614 18.754 17.4966 19.0188 17.1365 19.221C16.737 19.4455 16.1165 19.6068 15.6583 19.6054C15.2454 19.6042 14.9632 19.5241 14.3987 19.3639C11.3653 18.5029 8.50295 16.8785 6.11497 14.4905C3.72699 12.1025 2.10252 9.24014 1.24155 6.20675C1.08134 5.6423 1.00124 5.36008 1.00001 4.94713C0.998645 4.48891 1.16001 3.86842 1.38443 3.46891C1.58668 3.10888 1.85149 2.84407 2.38111 2.31445L2.53874 2.15681C3.07019 1.62537 3.33591 1.35965 3.62129 1.2153C4.18885 0.928232 4.85912 0.928232 5.42668 1.2153C5.71206 1.35965 5.97778 1.62537 6.50922 2.15681L6.70409 2.35168C7.0537 2.70129 7.2285 2.87609 7.34279 3.05187C7.77378 3.71476 7.77378 4.56934 7.34278 5.23223C7.2285 5.40801 7.0537 5.58281 6.70409 5.93242C6.58978 6.04673 6.53262 6.10388 6.48478 6.1707C6.31477 6.40813 6.25607 6.75239 6.33779 7.03274C6.36079 7.11163 6.39072 7.17397 6.45059 7.29866Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type ContactCard = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  label: string;
};

const CONTACTS: ContactCard[] = [
  {
    icon: MailIcon,
    title: "Email",
    description: "Our friendly team is here to help.",
    href: "mailto:hello@goodrequest.com",
    label: "hello@goodrequest.com",
  },
  {
    icon: PinIcon,
    title: "Office",
    description: "Come say hello at our office HQ.",
    href: "https://maps.google.com/?q=Obchodná+3D,+010+08+Žilina",
    label: "Obchodná 3D, 010 08 Žilina, Slovakia",
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    description: "Mon-Fri from 8am to 5pm.",
    href: "tel:+421911750750",
    label: "+421 911 750 750",
  },
];

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <BackLink />

      <h1 className={styles.title}>Kontakt</h1>

      <ul className={styles.cards}>
        {CONTACTS.map((contact) => (
          <li className={styles.card} key={contact.title}>
            <span className={styles.iconBox}>{contact.icon}</span>
            <h2 className={styles.cardTitle}>{contact.title}</h2>
            <p className={styles.cardText}>{contact.description}</p>
            <a className={styles.cardLink} href={contact.href}>
              {contact.label}
            </a>
          </li>
        ))}
      </ul>

      <Image
        className={styles.image}
        src="/images/contact-dog.jpg"
        alt=""
        width={1120}
        height={376}
        sizes="(max-width: 1199px) 100vw, 1120px"
        priority
      />
    </section>
  );
}
