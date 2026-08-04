import styles from "./DonationChoice.module.scss";

export function DonationChoice() {
  return (
    <fieldset className={styles.choicesWrapper}>
      <legend className="sr-only">Vyberte si možnosť, ako chcete pomôcť</legend>

      <input
        className={`sr-only ${styles.choiceInput}`}
        type="radio"
        name="donationType"
        id="donationType-shelter"
        value="shelter"
      />
      <label className={styles.choiceLabel} htmlFor="donationType-shelter">
        Prispieť konkrétnemu útulku
      </label>

      <input
        className={`sr-only ${styles.choiceInput}`}
        type="radio"
        name="donationType"
        id="donationType-foundation"
        value="foundation"
      />
      <label className={styles.choiceLabel} htmlFor="donationType-foundation">
        Prispieť celej nadácii
      </label>
    </fieldset>
  );
}
