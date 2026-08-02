import {Step, type StepState} from './Step';
import styles from './Stepper.module.scss';

interface StepperProps {
	steps: string[];
	current: number;
}

function stepState(number: number, current: number): StepState {
	if (number < current) return "done";
	if (number === current) return "active";
	return "upcoming";
}

export function Stepper({steps, current}: StepperProps) {
	return (
		<ol role="list" className={styles.stepNumbersWrapper}>
			{steps.map((step, index) => (
				<Step
					key={step}
					label={step}
					number={index + 1}
					state={stepState(index + 1, current)}
				/>
			))}
		</ol>
	);
}
