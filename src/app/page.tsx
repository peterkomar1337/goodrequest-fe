import Image from "next/image";
import {Footer} from "@/components/Footer/Footer";
import {Stepper} from "@/components/Stepper/Stepper";
import styles from "./page.module.scss";
import {DonationChoice} from "@/components/DonationChoice/DonationChoice";
import {ShelterSelect} from "@/components/ShelterSelect/ShelterSelect";
import DonationAmount from "@/components/DonationAmount/DonationAmount";

export default function Home() {

	const steps = [
		"Výber útulku",
		"Osobné údaje",
		"Potvrdenie"
	]

  return (
    <main>
      <div className={styles.wrapper}>
				<section className={`container ${styles.section}`}>
					<div className={styles.content}>
						<Stepper steps={steps} current={1} />
						<h1 className={styles.title}>Vyberte si možnosť, ako chcete pomôcť</h1>
						<DonationChoice/>
						<div className={styles.sectionDiv}>
							<h2 className={styles.sectionTitle}>O projekte</h2>
							<ShelterSelect/>
						</div>

						<DonationAmount/>

						{/*todo: component*/}
						<div className="stepNavigation">
							<button type="button">Späť</button>
							<button type="button">Pokračovať</button>
						</div>

						<Footer />
					</div>
					<div className="image">
						<Image
							src="/images/dog.jpg"
							alt="Dog Image"
							width={500}
							height={500}
						/>
					</div>
				</section>
			</div>
    </main>
  );
}
