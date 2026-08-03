import styles from "./Steps.module.scss";
import {DonationChoice} from "@/components/DonationChoice/DonationChoice";
import {ShelterSelect} from "@/components/ShelterSelect/ShelterSelect";
import DonationAmount from "@/components/DonationAmount/DonationAmount";

export function StepShelter() {
	return (
		<>
			<h1 className={styles.title}>Vyberte si možnosť, ako chcete pomôcť</h1>
			<DonationChoice/>
			<div className={styles.sectionDiv}>
				<h2 className={styles.sectionTitle}>O projekte</h2>
				<ShelterSelect/>
			</div>
			<DonationAmount/>
		</>
	)
}
