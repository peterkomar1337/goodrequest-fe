import { useEffect, useRef, useState } from "react";

const DURATION = 1200;

const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

export function useCountUp(target: number) {
  const [value, setValue] = useState(target);
  const currentValue = useRef(target);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const duration = prefersReducedMotion ? 0 : DURATION;
    const from = currentValue.current;
    const startedAt = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const progress =
        duration > 0 ? Math.min((now - startedAt) / duration, 1) : 1;
      const next = from + (target - from) * easeOut(progress);

      currentValue.current = next;
      setValue(next);

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [target]);

  return value;
}
