"use client";

import { useSteps } from "@/context/StepsContext";
import { Stepper } from "@/components/Stepper/Stepper";
import { StepNavigation } from "@/components/StepNavigation/StepNavigation";
import { StepShelter } from "@/components/Steps/StepShelter";
import { StepPersonal } from "@/components/Steps/StepPersonal";
import { StepSummary } from "@/components/Steps/StepSummary";

const stepLabels = ["Výber útulku", "Osobné údaje", "Potvrdenie"];

export function Steps() {
  const { state } = useSteps();

  return (
    <>
      <Stepper steps={stepLabels} current={state.step} />
      {state.step === 1 && <StepShelter />}
      {state.step === 2 && <StepPersonal />}
      {state.step === 3 && <StepSummary />}
      <StepNavigation />
    </>
  );
}
