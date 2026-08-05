import type { Metadata } from "next";
import { BackLink } from "@/components/BackLink/BackLink";
import { DonationStats } from "@/components/DonationStats/DonationStats";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "O projekte | Nadácia Good Boy",
  description:
    "Nadácia Good Boy zachraňuje opustené a týrané psy v Žiline. Pozrite si, koľko sa vyzbieralo a koľko darcov sa zapojilo.",
};

export default function AboutPage() {
  return (
    <article className={styles.page}>
      <BackLink />

      <h1 className={styles.title}>O projekte</h1>

      <p className={styles.text}>
        Nadácia Good Boy sa venuje zlepšovaniu života psov v Žiline na
        Slovensku. Zachraňujeme opustené, týrané a bezdomovské psy, poskytujeme
        im lekársku starostlivosť, útočisko a lásku, ktorú si zaslúžia. Naším
        poslaním je dať týmto verným spoločníkom druhú šancu na život tým, že im
        nájdeme milujúci domov. Okrem záchrany a rehabilitácie sa zameriavame aj
        na podporu zodpovedného vlastníctva zvierat a ochrany zvierat
        prostredníctvom vzdelávacích a komunitných programov.
      </p>

      <section className={styles.stats} aria-label="Vyzbierané príspevky">
        <DonationStats />
      </section>

      <p className={styles.text}>
        Naša práca je možná vďaka podpore vášnivých dobrovoľníkov, štedrých
        darcov a komunity, ktorá sa hlboko stará o dobro zvierat. Organizujeme
        aj kastračné a sterilizačné iniciatívy, aby sme riešili problém túlavých
        psov a zabezpečili dlhodobý vplyv. V nadácii Good Boy veríme, že každý
        pes si zaslúži bezpečný, milujúci domov a šťastný život. Pridajte sa k
        nám a pomôžte nám robiť zmeny — či už dobrovoľníctvom, darovaním alebo
        adopciou chlpatého priateľa. Spoločne môžeme vytvoriť lepšiu budúcnosť
        pre psy v Žiline.
      </p>
    </article>
  );
}
