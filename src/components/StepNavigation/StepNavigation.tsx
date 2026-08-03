import {Button} from "@/components/Button/Button";
import styles from "./StepNavigation.module.scss";
import {Dispatch} from "react";
import {FIRST_STEP, StepsAction} from "@/context/StepsContext";

const ArrowLeft = (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
		<path d="M12.6667 6.83333H1M6.83333 1L1 6.83333L6.83333 12.6667"
		      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

const ArrowRight = (
	<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
		<path d="M1 6.83333H12.6667M6.83333 12.6667L12.6667 6.83333L6.83333 1"
		      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
);

type StepNavigationProps = {
	step: number;
	dispatch: Dispatch<StepsAction>;
}

export function StepNavigation({ step, dispatch }: StepNavigationProps) {
	return (
		<div className={styles.stepNavigation}>
			<Button variant="secondary" text="Späť" type="button" icon={ArrowLeft} iconPosition="left"
			        onClick={() => dispatch({ type: "back" })}
			        disabled={step === FIRST_STEP}/>
			<Button variant="primary" text="Pokračovať" type="button" icon={ArrowRight} iconPosition="right"
			        onClick={() => dispatch({ type: "next" })}/>
		</div>
	)
}
