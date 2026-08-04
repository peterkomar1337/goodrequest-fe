import { useFormContext } from "react-hook-form";
import type { DonationFormValues } from "@/lib/donationSchema";
import styles from "./DonationChoice.module.scss";

export function DonationChoice() {
  const { register } = useFormContext<DonationFormValues>();

  return (
    <fieldset className={styles.choicesWrapper}>
      <legend className="sr-only">Vyberte si možnosť, ako chcete pomôcť</legend>

      <input
        className={`sr-only ${styles.choiceInput}`}
        type="radio"
        id="donationType-shelter"
        value="shelter"
        {...register("donationType")}
      />
      <label className={styles.choiceLabel} htmlFor="donationType-shelter">
        Prispieť konkrétnemu útulku
      </label>

      <input
        className={`sr-only ${styles.choiceInput}`}
        type="radio"
        id="donationType-foundation"
        value="foundation"
        {...register("donationType")}
      />
      <label className={styles.choiceLabel} htmlFor="donationType-foundation">
        Prispieť celej nadácii
      </label>
    </fieldset>
  );
}
