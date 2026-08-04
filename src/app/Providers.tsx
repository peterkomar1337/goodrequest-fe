"use client"

import {ReactNode} from "react";
import {StepsProvider} from "@/context/StepsContext";

export function Providers({children}: {children: ReactNode}) {
	return (
		<StepsProvider>
			{children}
		</StepsProvider>
	)
}
