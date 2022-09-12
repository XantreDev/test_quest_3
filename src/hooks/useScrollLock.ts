import { useLayoutEffect } from "react";

export const useScrollLock = (enabled: boolean = true) => {
  useLayoutEffect(() => {
    const initial = document.body.style.overflow;

    if (enabled) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = initial;
    };
  }, [enabled]);
};
