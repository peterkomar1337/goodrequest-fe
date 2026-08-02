import Image from "next/image";
import {Footer} from "@/components/Footer/Footer";
import {Stepper} from "@/components/Stepper/Stepper";
import styles from "./page.module.scss";
import {DonationChoice} from "@/components/DonationChoice/DonationChoice";
import {ShelterSelect} from "@/components/ShelterSelect/ShelterSelect";
import DonationAmount from "@/components/DonationAmount/DonationAmount";
import {StepNavigation} from "@/components/StepNavigation/StepNavigation";

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
						<StepNavigation/>
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
