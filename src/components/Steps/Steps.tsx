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

const stepLabels = ["Výber útulku", "Osobné údaje", "Potvrdenie"];

export function Steps() {
  const { state } = useSteps();

  const methods = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      donationType: "shelter",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      // TODO: placeholders until step 1 is wired to the form. Step navigation
      // validates shelterId and amount, so without them the wizard cannot
      // leave step 1.
      shelterId: "1",
      amount: 20,
    },
  });

  return (
    <FormProvider {...methods}>
      <form
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
      {/* TODO: debug view of the live form state, remove before delivery */}
      <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
    </FormProvider>
  );
}
