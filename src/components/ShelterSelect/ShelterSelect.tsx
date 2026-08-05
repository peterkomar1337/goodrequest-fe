import { useFormContext } from "react-hook-form";
import type { DonationFormValues } from "@/lib/donationSchema";
import styles from "./ShelterSelect.module.scss";
import { useShelters } from "@/hooks/useShelters";

export function ShelterSelect() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<DonationFormValues>();

  const { data: shelters, isPending, isError } = useShelters();

  const isForShelter = watch("donationType") === "shelter";

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor="shelterId">
        Útulok{" "}
        {!isForShelter && <span className={styles.optional}>(Nepovinné)</span>}
      </label>
      <select
        className={styles.select}
        id="shelterId"
        disabled={!shelters}
        aria-invalid={errors.shelterId ? true : undefined}
        aria-describedby={errors.shelterId ? "shelterId-error" : undefined}
        {...register("shelterId")}
      >
        <option value="" disabled>
          {isPending ? "Načítavam útulky..." : "Vyberte útulok zo zoznamu"}
        </option>
        {shelters?.map((shelter) => (
          <option key={shelter.id} value={shelter.id}>
            {shelter.name}
          </option>
        ))}
      </select>
      {isError && (
        <p className={styles.error} role="alert">
          Útulky sa nepodarilo načítať. Skús obnoviť stránku.
        </p>
      )}
      {errors.shelterId && (
        <p className={styles.error} id="shelterId-error" role="alert">
          {errors.shelterId.message}
        </p>
      )}
    </div>
  );
}
