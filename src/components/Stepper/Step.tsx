import styles from "./Stepper.module.scss";
import Image from "next/image";

export type StepState = "active" | "done" | "upcoming";

interface StepProps {
  label: string;
  number: number;
  state: StepState;
}

export function Step({ label, number, state }: StepProps) {
  return (
    <li
      className={styles.stepItem}
      data-state={state}
      aria-current={state === "active" ? "step" : undefined}
    >
      <div className={styles.stepItemInner}>
        <div className={styles.stepNumber} aria-hidden>
          {state === "done" ? (
            <Image
              className={styles.checkImage}
              src="/images/icons/check-primary.svg"
              alt=""
              width={14}
              height={12}
            />
          ) : (
            number
          )}
        </div>
        <span className={styles.stepLabel}>{label}</span>
      </div>
    </li>
  );
}
