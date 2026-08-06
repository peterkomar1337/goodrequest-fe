"use client";

import { useSteps } from "@/context/StepsContext";
import { Stepper } from "@/components/Stepper/Stepper";
import { Button } from "@/components/Button/Button";
import { StepNavigation } from "@/components/StepNavigation/StepNavigation";
import { StepShelter } from "@/components/Steps/StepShelter";
import { StepPersonal } from "@/components/Steps/StepPersonal";
import { StepSummary } from "@/components/Steps/StepSummary";
import { DonationFormValues, donationSchema } from "@/lib/donationSchema";
import { useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  contribute,
  toContributePayload,
  type ContributePayload,
} from "@/lib/api";
import styles from "./Steps.module.scss";

const stepLabels = ["Výber útulku", "Osobné údaje", "Potvrdenie"];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function Steps() {
  const { state, dispatch } = useSteps();

  const methods = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      donationType: "shelter",
      shelterId: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (payload: ContributePayload) => {
      await Promise.all([contribute(payload), delay(500)]);
    },
  });

  const startOver = () => {
    mutation.reset();
    methods.reset();
    dispatch({ type: "reset" });
  };

  const successTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (mutation.isSuccess) {
      successTitleRef.current?.focus();
    }
  }, [mutation.isSuccess]);

  const formRef = useRef<HTMLFormElement>(null);
  const previousStep = useRef(state.step);

  useEffect(() => {
    if (previousStep.current === state.step) return;

    previousStep.current = state.step;

    const heading = formRef.current?.querySelector<HTMLHeadingElement>("h1");

    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView({ block: "nearest" });
  }, [state.step]);

  if (mutation.isSuccess) {
    return (
      <div className={`${styles.content} ${styles.success}`}>
        <h1 className={styles.title} ref={successTitleRef} tabIndex={-1}>
          Ďakujeme za váš príspevok
        </h1>
        <p>Vašu pomoc sme zaznamenali a posúvame ju ďalej.</p>
        <Button
          variant="primary"
          type="button"
          text="Späť na začiatok"
          onClick={startOver}
        />
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form
        ref={formRef}
        className={styles.content}
        onSubmit={methods.handleSubmit((values) => {
          mutation.mutate(toContributePayload(values));
        })}
      >
        <Stepper steps={stepLabels} current={state.step} />
        <div className={styles.step} key={state.step}>
          {state.step === 1 && <StepShelter />}
          {state.step === 2 && <StepPersonal />}
          {state.step === 3 && <StepSummary />}
        </div>
        {mutation.isError && (
          <p className={styles.error} role="alert">
            Formulár sa nepodarilo odoslať. Skúste to prosím znova.
          </p>
        )}
        <StepNavigation isSubmitting={mutation.isPending} />
      </form>
    </FormProvider>
  );
}
