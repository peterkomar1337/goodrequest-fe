"use client";

import { useSteps } from "@/context/StepsContext";
import { Stepper } from "@/components/Stepper/Stepper";
import { StepNavigation } from "@/components/StepNavigation/StepNavigation";
import { StepShelter } from "@/components/Steps/StepShelter";
import { StepPersonal } from "@/components/Steps/StepPersonal";
import { StepSummary } from "@/components/Steps/StepSummary";
import { DonationFormValues, donationSchema } from "@/lib/donationSchema";
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
  const { state } = useSteps();

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

  return (
    <FormProvider {...methods}>
      <form
        className={styles.content}
        onSubmit={methods.handleSubmit((values) => {
          mutation.mutate(toContributePayload(values));
        })}
      >
        <Stepper steps={stepLabels} current={state.step} />
        {state.step === 1 && <StepShelter />}
        {state.step === 2 && <StepPersonal />}
        {state.step === 3 && <StepSummary />}
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
