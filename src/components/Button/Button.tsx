import {ComponentProps, ReactNode} from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ComponentProps<"button"> {
	variant: "primary" | "secondary";
	text: string;
	icon?: ReactNode;
	iconPosition?: "left" | "right";
	type: "button" | "submit";
}

export function Button({
	 variant,
	 text,
	 type,
	 iconPosition,
	 icon,
	 ...rest
 }: ButtonProps) {
	return (
		<button type={type} className={`${styles.btn} ${styles[variant]}`} {...rest}>
			{icon && iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
			{text}
			{icon && iconPosition === "right" && <span className={styles.icon}>{icon}</span>}
		</button>
	)
}
