import Image from "next/image";
import {Footer} from "@/components/Footer/Footer";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.wrapper}>
				<section className={styles.section}>
					<div className="content">

						{/*todo component*/}
						<div className="stepNumbersWrapper">
							<div className="stepNumberElement active">
								<div className="stepNumber">
									1
								</div>
								<p>Výber útulku</p>
							</div>
							<div className="stepNumberElement">
								<div className="stepNumber">
									2
								</div>
								<p>Osobné údaje</p>
							</div>
							<div className="stepNumberElement">
								<div className="stepNumber">
									3
								</div>
								Potvrdenie
							</div>
						</div>

						<h1 className="headingH1">Vyberte si možnosť, ako chcete pomôcť</h1>

						{/*todo: component*/}
						<div className="choicesWrapper">
							<div className="choiceRadio">
								<input type={"radio"} name="choice" id="choice1" />
								<label htmlFor="choice1">Útulok 1</label>
							</div>
							<div className="choiceRadio">
								<input type={"radio"} name="choice" id="choice2" />
								<label htmlFor="choice2">Útulok 2</label>
							</div>
						</div>

						{/*todo: component*/}
						<div className="inputWrapper">
							<label htmlFor="utulok">Útulok <span>(Nepovinné)</span></label>
							<select id="utulok" name="utulok">
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
							</select>
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
