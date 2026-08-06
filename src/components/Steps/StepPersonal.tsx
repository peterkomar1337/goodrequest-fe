import styles from "./Steps.module.scss";
import { DonationFormValues } from "@/lib/donationSchema";
import { Controller, useFormContext } from "react-hook-form";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";

const countries = defaultCountries.filter((country) =>
  ["sk", "cz"].includes(parseCountry(country).iso2),
);

export function StepPersonal() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<DonationFormValues>();

  return (
    <>
      <h1 className={styles.title} tabIndex={-1}>
        Potrebujeme od Vás zopár informácií
      </h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>O vás</h2>

        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="firstName">
              Meno
            </label>
            <input
              className={styles.input}
              id="firstName"
              type="text"
              placeholder="Zadajte Vaše meno"
              aria-invalid={errors.firstName ? true : undefined}
              aria-describedby={
                errors.firstName ? "firstName-error" : undefined
              }
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className={styles.error} id="firstName-error" role="alert">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="lastName">
              Priezvisko
            </label>
            <input
              className={styles.input}
              id="lastName"
              type="text"
              placeholder="Zadajte Vaše priezvisko"
              aria-invalid={errors.lastName ? true : undefined}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className={styles.error} id="lastName-error" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            E-mailová adresa
          </label>
          <input
            className={styles.input}
            id="email"
            type="email"
            placeholder="Zadajte Váš e-mail"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.error} id="email-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Telefónne číslo
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                ref={field.ref}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                defaultCountry="sk"
                countries={countries}
                inputProps={{
                  id: "phone",
                  name: field.name,
                  placeholder: "123 321 123",
                  "aria-invalid": errors.phone ? true : undefined,
                  "aria-describedby": errors.phone ? "phone-error" : undefined,
                }}
              />
            )}
          />
          {errors.phone && (
            <p className={styles.error} id="phone-error" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
