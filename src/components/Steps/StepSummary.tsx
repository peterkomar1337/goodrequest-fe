import { useFormContext } from "react-hook-form";
import type { DonationFormValues } from "@/lib/donationSchema";
import { useShelters } from "@/hooks/useShelters";
import styles from "./Steps.module.scss";

const formatPhone = (value: string) =>
  value.replace(/^(\+\d{3})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");

export function StepSummary() {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<DonationFormValues>();
  const { donationType, shelterId, amount, firstName, lastName, email, phone } =
    watch();
  const isForShelter = donationType === "shelter";
  const { data: shelters } = useShelters();
  const shelter = shelters?.find((item) => String(item.id) === shelterId);
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  return (
    <>
      <h1 className={styles.title} tabIndex={-1}>
        Skontrolujte si zadané údaje
      </h1>

      <div className={styles.summary}>
        <h2 className={styles.sectionTitle}>Zhrnutie</h2>

        <dl className={styles.summaryGroup}>
          <div className={styles.summaryRow}>
            <dt className={styles.summaryTerm}>Forma pomoci</dt>
            <dd className={styles.summaryValue}>
              {isForShelter
                ? "Finančný príspevok konkrétnemu útulku"
                : "Finančný príspevok celej nadácii"}
            </dd>
          </div>

          {isForShelter && shelter && (
            <div className={styles.summaryRow}>
              <dt className={styles.summaryTerm}>Útulok</dt>
              <dd className={styles.summaryValue}>{shelter.name}</dd>
            </div>
          )}

          <div className={styles.summaryRow}>
            <dt className={styles.summaryTerm}>Suma príspevku</dt>
            <dd className={styles.summaryValue}>{amount} €</dd>
          </div>
        </dl>

        <dl className={styles.summaryGroup}>
          <div className={styles.summaryRow}>
            <dt className={styles.summaryTerm}>Meno a priezvisko</dt>
            <dd className={styles.summaryValue}>{fullName}</dd>
          </div>

          <div className={styles.summaryRow}>
            <dt className={styles.summaryTerm}>E-mail</dt>
            <dd className={styles.summaryValue}>{email}</dd>
          </div>

          <div className={styles.summaryRow}>
            <dt className={styles.summaryTerm}>Telefónne číslo</dt>
            <dd className={styles.summaryValue}>{formatPhone(phone)}</dd>
          </div>
        </dl>
      </div>

      <div className={styles.consent}>
        <input
          className={styles.consentInput}
          type="checkbox"
          id="consent"
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          {...register("consent")}
        />
        <label className={styles.consentLabel} htmlFor="consent">
          Súhlasím so spracovaním mojich osobných údajov
        </label>

        {errors.consent && (
          <p className={styles.error} id="consent-error" role="alert">
            {errors.consent.message}
          </p>
        )}
      </div>
    </>
  );
}
