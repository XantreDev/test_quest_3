import { useRef } from "react";

export const useConstant = <T>(init: () => Exclude<T, null>) => {
  const ref = useRef<Exclude<T, null> | null>(null);
  if (ref.current === null) {
    const result = init();

    ref.current = result;
    return result;
  }

  return ref.current;
};
