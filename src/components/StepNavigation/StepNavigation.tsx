import { useEffect, type MouseEvent } from "react";
import { Button } from "@/components/Button/Button";
import styles from "./StepNavigation.module.scss";
import { FIRST_STEP, LAST_STEP, useSteps } from "@/context/StepsContext";
import { useFormContext, type FieldPath } from "react-hook-form";
import type { DonationFormValues } from "@/lib/donationSchema";

const ArrowLeft = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M12.6667 6.83333H1M6.83333 1L1 6.83333L6.83333 12.6667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M1 6.83333H12.6667M6.83333 12.6667L12.6667 6.83333L6.83333 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const STEP_FIELDS: Record<number, FieldPath<DonationFormValues>[]> = {
  1: ["donationType", "shelterId", "amount"],
  2: ["firstName", "lastName", "email", "phone"],
  3: ["consent"],
};

type StepNavigationProps = {
  isSubmitting: boolean;
};

export function StepNavigation({ isSubmitting }: StepNavigationProps) {
  const { state, dispatch } = useSteps();
  const {
    trigger,
    watch,
    setFocus,
    getFieldState,
    formState: { errors },
  } = useFormContext<DonationFormValues>();

  const hasErrors = Object.keys(errors).length > 0;

  useEffect(() => {
    if (!hasErrors) return;

    const subscription = watch(() => {
      void trigger(STEP_FIELDS[state.step]);
    });

    return () => subscription.unsubscribe();
  }, [hasErrors, state.step, trigger, watch]);

  const handleNext = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const stepFields = STEP_FIELDS[state.step];
    const isStepValid = await trigger(stepFields);

    if (!isStepValid) {
      const firstInvalid = stepFields.find(
        (field) => getFieldState(field).invalid,
      );

      if (firstInvalid) setFocus(firstInvalid);

      return;
    }

    dispatch({ type: "next" });
  };

  const isLastStep = state.step === LAST_STEP;

  const primaryText = isLastStep ? "Odoslať" : "Pokračovať";

  return (
    <div className={styles.stepNavigation}>
      <Button
        variant="secondary"
        text="Späť"
        type="button"
        icon={ArrowLeft}
        iconPosition="left"
        onClick={() => dispatch({ type: "back" })}
        disabled={state.step === FIRST_STEP}
      />
      <Button
        variant="primary"
        text={isSubmitting ? "Odosielam…" : primaryText}
        type={isLastStep ? "submit" : "button"}
        icon={isLastStep ? undefined : ArrowRight}
        iconPosition={isLastStep ? undefined : "right"}
        onClick={isLastStep ? undefined : handleNext}
        disabled={isSubmitting}
      />
    </div>
  );
}
