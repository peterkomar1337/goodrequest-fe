import { useFormContext } from "react-hook-form";
import type { DonationFormValues } from "@/lib/donationSchema";
import styles from "./ShelterSelect.module.scss";

export function ShelterSelect() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<DonationFormValues>();

  const isForShelter = watch("donationType") === "shelter";

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor="shelterId">
        Útulok{""}
        {isForShelter && <span className={styles.optional}>(Nepovinné)</span>}
      </label>
      <select
        className={styles.select}
        id="shelterId"
        aria-invalid={errors.shelterId ? true : undefined}
        aria-describedby={errors.shelterId ? "shelterId-error" : undefined}
        {...register("shelterId")}
      >
        <option value="" disabled>
          Vyberte útulok zo zoznamu
        </option>
        <option value="1">Útulok Bratislava</option>
        <option value="2">Útulok Košice</option>
      </select>
      {errors.shelterId && (
        <p className={styles.error} id="shelterId-error" role="alert">
          {errors.shelterId.message}
        </p>
      )}
    </div>
  );
}
