import { useFormContext } from "react-hook-form";
import type { DonationFormValues } from "@/lib/donationSchema";
import styles from "./DonationAmount.module.scss";

const PRESETS = [5, 10, 20, 30, 50, 100];

export default function DonationAmount() {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<DonationFormValues>();

  const amount = watch("amount");

  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.legend}>Suma, ktorou chcem prispieť</legend>

      <div className={styles.customField}>
        <div className={styles.custom}>
          <label className="sr-only" htmlFor="amount">
            Vlastná suma v eurách
          </label>
          <input
            className={styles.input}
            type="number"
            id="amount"
            placeholder="0"
            min="1"
            inputMode="numeric"
            aria-invalid={errors.amount ? true : undefined}
            aria-describedby={errors.amount ? "amount-error" : undefined}
            {...register("amount", { valueAsNumber: true })}
          />
          <span className={styles.currency} aria-hidden>
            €
          </span>
        </div>

        {errors.amount && (
          <p className={styles.error} id="amount-error" role="alert">
            {errors.amount.message}
          </p>
        )}
      </div>

      <div className={styles.presets}>
        {PRESETS.map((value) => (
          <button
            key={value}
            type="button"
            className={styles.preset}
            aria-pressed={amount === value}
            onClick={() => setValue("amount", value, { shouldValidate: true })}
          >
            {value} €
          </button>
        ))}
      </div>
    </fieldset>
  );
}
