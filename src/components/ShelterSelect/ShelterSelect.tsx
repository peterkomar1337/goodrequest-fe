import { useFormContext } from "react-hook-form";
import type { DonationFormValues } from "@/lib/donationSchema";
import styles from "./ShelterSelect.module.scss";
import { SHELTERS } from "@/lib/shelters";

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
        {SHELTERS.map((shelter) => (
          <option key={shelter.id} value={shelter.id}>
            {shelter.name}
          </option>
        ))}
      </select>
      {errors.shelterId && (
        <p className={styles.error} id="shelterId-error" role="alert">
          {errors.shelterId.message}
        </p>
      )}
    </div>
  );
}
