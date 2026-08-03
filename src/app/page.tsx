import Image from "next/image";
import {Footer} from "@/components/Footer/Footer";
import {Stepper} from "@/components/Stepper/Stepper";
import styles from "./page.module.scss";
import {StepNavigation} from "@/components/StepNavigation/StepNavigation";
import {StepShelter} from "@/components/Steps/StepShelter";

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
						<StepShelter/>
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
