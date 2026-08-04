import styles from "./DonationAmount.module.scss";
const PRESETS = [5, 10, 20, 30, 50, 100];

export default function DonationAmount() {
  return (
    <fieldset className={styles.wrapper}>
      <legend className={styles.legend}>Suma, ktorou chcem prispieť</legend>

      <div className={styles.custom}>
        <label className="sr-only" htmlFor="amount">
          Vlastná suma v eurách
        </label>
        <input
          className={styles.input}
          type="number"
          id="amount"
          name="amount"
          placeholder="0"
          min="1"
          inputMode="numeric"
        />
        <span className={styles.currency} aria-hidden>
          €
        </span>
      </div>

      <div className={styles.presets}>
        {PRESETS.map((value) => (
          <div className={styles.preset} key={value}>
            <input
              className={`sr-only ${styles.presetInput}`}
              type="radio"
              name="amountPreset"
              id={`amount-${value}`}
              value={value}
            />
            <label className={styles.presetLabel} htmlFor={`amount-${value}`}>
              {value} €
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
