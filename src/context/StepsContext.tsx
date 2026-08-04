"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type StepsState = { step: number };

type StepsContextValue = {
  state: StepsState;
  dispatch: Dispatch<StepsAction>;
};

export type StepsAction = { type: "next" } | { type: "back" };

export const FIRST_STEP = 1;
export const LAST_STEP = 3;

export function stepsReducer(
  state: StepsState,
  action: StepsAction,
): StepsState {
  switch (action.type) {
    case "next":
      if (state.step === LAST_STEP) return state;
      return { step: state.step + 1 };
    case "back":
      if (state.step === FIRST_STEP) return state;
      return { step: state.step - 1 };
    default:
      return state;
  }
}

const StepsContext = createContext<StepsContextValue | undefined>(undefined);

export function StepsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(stepsReducer, { step: FIRST_STEP });
  const value = { state, dispatch };

  return (
    <StepsContext.Provider value={value}>{children}</StepsContext.Provider>
  );
}

export function useSteps() {
  const context = useContext(StepsContext);

  if (!context) {
    throw new Error("useSteps must be used within a StepsProvider");
  }

  return context;
}
