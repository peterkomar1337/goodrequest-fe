import Image from "next/image";
import {Footer} from "@/components/Footer/Footer";
import {Stepper} from "@/components/Stepper/Stepper";
import styles from "./page.module.scss";
import {DonationChoice} from "@/components/DonationChoice/DonationChoice";
import {ShelterSelect} from "@/components/ShelterSelect/ShelterSelect";

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

						{/*todo: component*/}
						<div className="donationWrapper">
							<label htmlFor="donation">Suma, ktorou chcete zaplatiť</label>
							<input type="number" id="donation" name="donation" />
							<div className="donationButtonList">
								<div className="donationPreset">
									<input type="radio" name="amount" id="amount1" value="5" />
									<label htmlFor="amount1">5 €</label>
								</div>
								<div className="donationPreset">
									<input type="radio" name="amount" id="amount2" value="10" />
									<label htmlFor="amount2">10 €</label>
								</div>
								<div className="donationPreset">
									<input type="radio" name="amount" id="amount3" value="20" />
									<label htmlFor="amount3">20 €</label>
								</div>
								<div className="donationPreset">
									<input type="radio" name="amount" id="amount4" value="30" />
									<label htmlFor="amount4">30 €</label>
								</div>
								<div className="donationPreset">
									<input type="radio" name="amount" id="amount5" value="50" />
									<label htmlFor="amount5">50 €</label>
								</div>
								<div className="donationPreset">
									<input type="radio" name="amount" id="amount6" value="100" />
									<label htmlFor="amount6">100 €</label>
								</div>
							</div>
						</div>

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
