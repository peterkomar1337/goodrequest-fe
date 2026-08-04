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
import styles from "./Steps.module.scss";

const stepLabels = ["Výber útulku", "Osobné údaje", "Potvrdenie"];

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

  return (
    <FormProvider {...methods}>
      <form
        className={styles.content}
        onSubmit={methods.handleSubmit(() => {
          // TODO: send through useMutation once the API is wired
        })}
      >
        <Stepper steps={stepLabels} current={state.step} />
        {state.step === 1 && <StepShelter />}
        {state.step === 2 && <StepPersonal />}
        {state.step === 3 && <StepSummary />}
        <StepNavigation />
      </form>
    </FormProvider>
  );
}
